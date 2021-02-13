import React, { useState, useEffect } from 'react'
import { ResidentContainer } from './ResidentContainer'

export const LocationContainer = ({ id }) => {
    const
        BASE = 'https://rickandmortyapi.com/api',

        [location, setLocation] = useState(null),
        [locationData, setLocationData] = useState({}),

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
    }, [id])

    useEffect(() => {
        if (location !== null) {
            const
                name = location.name,
                type = location.type,
                dimension = location.dimension,
                total_residents = location.residents.length,
                residents = location.residents.map(resident => resident).slice(0, 10)

            const
                getLocationData = { name, type, dimension, total_residents, residents }

            setLocationData(getLocationData)
        }
    }, [location])

    const
        { name, type, dimension, total_residents, residents } = locationData,

        isResidents = total_residents > 0 ? true : false

    return (
        <>
            <div className="location-container">
                {message !== null
                    ?
                    <p className="message">{message}</p>
                    :
                    <>
                        <h2>{name}</h2>
                        <div className="location-info">
                            <p><span>Type: </span>{type}</p>
                            <p><span>Dimension:</span> {dimension}</p>
                            <p><span>Total residents:</span> {total_residents}</p>
                        </div>
                    </>
                }
            </div>
            <div className="card-container">
                {message !== null
                    ?
                    null
                    :
                    <>
                        {isResidents
                            ?
                            residents.map((resident, index) => {
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
        </>
    )
}