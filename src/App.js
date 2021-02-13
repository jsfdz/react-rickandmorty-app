import React, { useState, useEffect } from 'react'
import { SearchBox } from './components/SearchBox'
import { LocationContainer } from './components/LocationContainer'
import { getRandomNumber } from './helpers/getRandomNumber'
import {Svg} from './components/Svg'
import './styles/style.css';

function App() {
  const
    LOCATION_INDEX = 108,

    [query, setQuery] = useState(''),
    [locationID, setLocationID] = useState(getRandomNumber(LOCATION_INDEX)),

    handleSubmit = (e) => {
      e.preventDefault()
      setLocationID(query)
    },

    handleQuery = (e) => {
      setQuery(e.target.value)
    }

  return (
    <>
      <div className="header-hero">
        <SearchBox
          onSubmit={handleSubmit}
          onChange={handleQuery}
        />
        <Svg />
      </div>
      <div className="container">
        <LocationContainer
          id={locationID}
        />
      </div>
    </>

  )
}

export default App
