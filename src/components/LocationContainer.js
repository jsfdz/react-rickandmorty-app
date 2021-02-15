import React, { useState, useEffect } from 'react'
import { LocationInfo } from './LocationInfo'
import { ResidentContainer } from './ResidentContainer'
import { Pagination } from './Pagination'

export const LocationContainer = ({ id }) => {
    const
        BASE = 'https://rickandmortyapi.com/api',

        [location, setLocation] = useState(null),
        [locationData, setLocationData] = useState({}),

        [page, setPage] = useState(0),

        [message, setMessage] = useState(null)

    useEffect(() => {
        fetch(`${BASE}/location/${id}`)
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(data => {
                setLocation(data)
            })
            .catch(error => {
                setMessage('this location does not exist')
            })
        setMessage(null)
        setPage(0)
    }, [id])

    useEffect(() => {
        if (location !== null) {
            const
                name = location.name,
                type = location.type,
                dimension = location.dimension,
                total_residents = location.residents.length,
                residents = location.residents.map(resident => resident)

            const
                getLocationData = { name, type, dimension, total_residents, residents }

            setLocationData(getLocationData)
        }
    }, [location])

    const
        { name, type, dimension, total_residents, residents } = locationData,

        maxPage = Math.ceil(total_residents / 5),
        onNextPage = () => setPage((page + 1) % maxPage),
        onPrevPage = () => setPage((page - 1) % maxPage)

    return (
        <>
            <LocationInfo
                name={name}
                type={type}
                dimension={dimension}
                total_residents={total_residents}
                message={message}
            />

            <div className="card-container">
                {!message &&
                    <>
                        {total_residents > 0
                            ?
                            residents.slice(page * 5, 5 * (page + 1)).map((resident, index) => {
                                return (
                                    <ResidentContainer
                                        key={index + 1}
                                        url={resident}
                                    />
                                )
                            })
                            :
                            <p className="message">There are no residents to display at this location</p>
                        }
                    </>
                }
            </div>

            <Pagination
                page={page}
                message={message}
                onPrevPage={onPrevPage}
                onNextPage={onNextPage}
                total_residents={total_residents}
                maxPage={maxPage}
            />
        </>
    )
}