import React from 'react';
const google = window.google
const io = require('socket.io-client');
const port = process.env.PORT || 5000;

// let walks = io.connect(process.env.PORT ? `http://highpaw.herokuapp.com:${process.env.PORT + 1}` : `http://localhost:${port + 1}/walks`)

// walks.on('welcome', (msg) => {
//   console.log('Received: ', msg)
// })

// walks.emit('joinRoom', 'testing')

// walks.on('success', (res) => console.log(res))

// walks.on('sendLocation', location => {
//   console.log(location)
// });

// window.walks = walks

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: {}
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

    let walks = io.connect(window.location.href.includes("heroku") ? `https://highpaw.herokuapp.com:${process.env.PORT}/walks` : `http://localhost:${5001}/walks`);

    walks.on('welcome', (msg) => {
      console.log('Received: ', msg)
    });

    walks.emit('joinRoom', 'testing');

    walks.on('success', (res) => console.log(res));

    walks.on('sendLocation', location => {
      // console.log(location)
    });

    window.walks = walks;
    
    walks.on('sendLocation', data => {
      
      let location = data.latLng;
      let user = data.currentUser;
      
      if (this.state.markers[user]) { 
        this.state.markers[user].setPosition(location)
      } else {

        let marker = new google.maps.Marker({
          position: location,
          map: this.map
        })

        this.state.markers[user] = marker;
        this.map.setCenter(location)
      }
    })


    if (navigator.geolocation) {
      
      setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }

          let data = { currentUser: this.props.currentUser , latLng}
          
          walks.emit('sendLocation', data)
          // debugger;
        })
      }, 1000)
    } else {
      locationTag.innerHTML = "Geolocation isn't supported by your browser."
    }


  }

  componentDidUpdate() {
    
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