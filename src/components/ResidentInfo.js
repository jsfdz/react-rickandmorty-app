import React from 'react'

export const ResidentInfo = ({ name, image, status, origin, episodes }) => {

    return (
        <>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>status: {status}</p>
            <p>origin: {origin}</p>
            <p>total episodes: {episodes}</p>
        </>
    )
}