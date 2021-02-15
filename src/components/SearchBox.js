import React from 'react'
import { Svg } from './Svg'

export const SearchBox = ({ onSubmit, onChange }) => {

    return (
        <div className="header-hero">
            <form className="search" onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    placeholder='write location'
                    type="text"
                    name="location"
                />
            </form>
            <Svg />
        </div>
    )
}