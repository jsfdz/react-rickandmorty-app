import React from 'react'

export const ResidentInfo = ({ name, image, status, origin, episodes }) => {

    return (
        <div className="card">
            <div className="resident-avatar">
                <img src={image} alt={name} />
            </div>
            <div className="resident-info">
                <h2>{name}</h2>
                <p>status: {status}</p>
                <p>origin: {origin}</p>
                <p>total episodes: {episodes}</p>
            </div>
        </div>
    )
}