import React, { useState } from 'react'
import { SearchBox } from './components/SearchBox'
import { LocationContainer } from './components/LocationContainer'
import { Svg } from './components/Svg'
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
        <span>JsFdz</span>
        <em>•</em>
        <span>DennCriss</span>
        <em>•</em>
        <span>The H</span>
      </div>
    </>
  )
}

export default App
