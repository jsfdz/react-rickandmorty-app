import React from 'react'

export const LocationInfo = ({ name, type, dimension, total_residents, message }) => {

    return (
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
    )
}