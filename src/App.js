import React, { useState } from 'react'
import { SearchBox } from './components/SearchBox'
import { LocationContainer } from './components/LocationContainer'
import { Credits } from './components/Credits'
import { getRandomNumber } from './helpers/getRandomNumber'

function App() {
  const
    LOCATION_INDEX = 108,

    [query, setQuery] = useState(''),
    [locationID, setLocationID] = useState(getRandomNumber(LOCATION_INDEX)),

    handleSubmit = (e) => {
      e.preventDefault()
      setLocationID(query)
      e.target[0].value = ''
    },

    handleQuery = (e) => {
      setQuery(e.target.value)
    }

  return (
    <>
      <SearchBox
        onSubmit={handleSubmit}
        onChange={handleQuery}
      />

      <LocationContainer
        id={locationID}
      />

      <Credits />
    </>
  )
}

export default App
