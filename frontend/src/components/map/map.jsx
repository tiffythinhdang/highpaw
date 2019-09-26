import React from 'react';
const google = window.google
const io = require('socket.io-client');
const port = process.env.PORT || 5000;

let walks = io.connect(process.env.PORT ? `http://highpaw.herokuapp.com:${process.env.PORT + 1}` : `http://localhost:${port + 1}/walks`)

walks.on('welcome', (msg) => {
  console.log('Received: ', msg)
})

walks.emit('joinRoom', 'testing')

walks.on('success', (res) => console.log(res))

walks.on('sendMessage', message => {
  console.log(message)
});


// walks.emit('sendText', msg )

window.walks = walks

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marker: false
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
      
      setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }

          if (this.state.marker) {
            // console.log(this.state.marker)
            this.state.marker.setPosition(latLng)
            
          } else {
            // console.log("new mark")
            let marker = new google.maps.Marker({
              position: latLng,
              map: this.map
            })
            this.setState({
              marker
            })
            
            this.map.setCenter(latLng)
          }    
        })
      }, 1000)
    } else {
      locationTag.innerHTML = "Geolocation isn't supported by your browser."
    }


  }

  componentDidUpdate() {
    const locationTag = document.getElementById('demo');

    // if (navigator.geolocation) {
    //   this.maker = false
    //   setInterval(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //       let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }

        
    //       if (marker) {
    //         marker.setCenter(latLng)
    //       } else {
    //         marker = new google.maps.Marker({
    //           position: latLng,
    //           map: this.map
    //         })
    //       }

    //       // this.map.setCenter(latLng)
    //     })
    //   }, 1000)


      // navigator.geolocation.watchPosition((position) => {
      //   let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }
        
      //   const marker = new google.maps.Marker({
      //     position: latLng,
      //     map: this.map
      //   })

      //   this.map.setCenter(latLng)
      // })
    // } else {
    //   locationTag.innerHTML = "Geolocation isn't supported by your browser."
    // }
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