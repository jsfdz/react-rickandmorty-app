import React from 'react'

export const SearchBox = ({ onSubmit, onChange }) => {

    return (
        <form onSubmit={onSubmit}>
            <input
                onChange={onChange}
                placeholder='write location'
                type="text"
                name="location"
            />
        </form>
    )
}