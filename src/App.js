import React, { useState, useEffect } from 'react'
import { SearchBox } from './components/SearchBox'
import { LocationContainer } from './components/LocationContainer'
import { getRandomNumber } from './helpers/getRandomNumber'

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
    <div className="container">
      <h1>Rick and Morty Api by DENNCRISS</h1>
      <SearchBox
        onSubmit={handleSubmit}
        onChange={handleQuery}
      />
      <LocationContainer
        id={locationID}
      />
    </div>
  )
}

export default App
