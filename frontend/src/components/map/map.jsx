import React from 'react';
const google = window.google

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: []
    }
  }

  componentDidMount() {

    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 17
    };



    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);


    const locationTag = document.getElementById('demo');

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }
        const marker = new google.maps.Marker({
          position: latLng,
          map: this.map
        })

      })
    } else {
      locationTag.innerHTML = "Geolocation isn't supported by your browser."
    }


  }

  componentDidUpdate() {
    const locationTag = document.getElementById('demo');

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }
        const marker = new google.maps.Marker({
          position: latLng,
          map: this.map
        })
      })
    } else {
      locationTag.innerHTML = "Geolocation isn't supported by your browser."
    }
  }


  render() {
    return (
      <div>

        <div id="map-container" ref={map => this.mapNode = map}>

        </div>
        <p id="demo"></p>
      </div>
    )
  }
}