import React, { Component } from 'react'
import './map.style.scss'

export class MiiaMap extends Component {
  constructor (props) {
    super(props)

    this.state = {
      map: null
    }
  }

  componentDidMount () {
    const mapDOMEl = document.getElementById('map');
    const map = new google.maps.Map(mapDOMEl, {
      center: this.props.center,
      zoom: 13
    })

    this.setState({ map })
  }

  componentDidUpdate() {
    this.locate(this.props.coordinates)
  }

  locate (coordinates) {
    coordinates.forEach(coordinate => this.markBuilder(coordinate, this.state.map));
  }

  markBuilder (coordinates, map = this.state.map) {
    return new google.maps.Marker({
      map,
      position: coordinates,
      title: 'MIIA'
    })
  }

  render () {
    return (
      <div id="map"></div>
    )
  }
}
