import React, { useState } from 'react'
import { SearchBox } from './components/SearchBox'
import { LocationContainer } from './components/LocationContainer'
import { Svg } from './components/Svg'
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
      <div className="header-hero" style={{ backgroundImage: 'url(./img/fondo.png)' }}>
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
      <div className="credits">
        <Credits />
      </div>
    </>
  )
}

export default App
