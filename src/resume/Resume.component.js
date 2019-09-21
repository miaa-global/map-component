import React from 'react'
import './resume.style.scss'

import src from '../../assets/icono-miaa.png'

export function Resume () {
  return (
    <div className="resume-container">
      <img src={src} />
      <p>
        El Mapa Interactivo del acoso y del abuso MIA!A Popayán, es una estrategia de visibilización de los casos de violencia, acoso y abuso que se presentan dentro del territorio. La iniciativa MIA!A nace en La Plata, Argentina gracias a dos arquitectas: Irene Bilmes y Elisa Deschamps del equipo Mapas de lo Efímero.
      </p>
    </div>
  )
}
