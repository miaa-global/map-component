import React from 'react'
import ReactDOM from 'react-dom'

import { MiiaMap } from './map/Map.component.js'
import { Navbar } from './navbar/Navbar.component.js'
import { Resume } from './resume/Resume.component.js'

function Main() {
  const coordinates = [
    {
      lat: 2.443136,
      lng: -76.601111
    },
    {
      lat: 2.4431321,
      lng: -76.6166839
    },
    {
      lat: 2.456511,
      lng: -76.595664
    },
  ]

  const center = {
    lat: 2.43823,
    lng: -76.61316
  }

  return (
    <div className="main-container">
      <Navbar />
      <Resume />
      <MiiaMap coordinates={coordinates} center={center} />
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
