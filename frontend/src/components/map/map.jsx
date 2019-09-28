import React from 'react';
const google = window.google

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: {}
    }
  }

  componentDidMount() {
    
    const mapOptions = {
      center: { lat: 37.798887, lng: -122.401373 }, // this is SF
      zoom: 17
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    const locationTag = document.getElementById('demo');


    // let walks = io();


    // walks.on('welcome', (msg) => {
    //   console.log('Received: ', msg)
    // });

    // walks.emit('joinRoom', 'testing');

    // walks.on('success', (res) => console.log(res));

    // walks.on('sendLocation', location => {
    //   // console.log(location)
    // });

    // window.walks = walks;
    let locationCallBack = (data) => {
      let location = data.latLng;
      let user = data.currentUser;
      // debugger
      if (this.state.markers[user]) {
        this.state.markers[user].setPosition(location)
      } else {

        let marker = new google.maps.Marker({
          position: location,
          map: this.map,
          label: data.name
        })

        this.state.markers[user] = marker;
        this.map.setCenter(location)
      }
    }

    let locationListener = { action: 'sendLocation', callback: locationCallBack}

    this.props.receiveListener(locationListener)
    
    // walks.on('sendLocation', data => {
      
    //   let location = data.latLng;
    //   let user = data.currentUser;
      
    //   if (this.state.markers[user]) { 
    //     this.state.markers[user].setPosition(location)
    //   } else {

    //     let marker = new google.maps.Marker({
    //       position: location,
    //       map: this.map,
    //       label: data.name
    //     })

    //     this.state.markers[user] = marker;
    //     this.map.setCenter(location)
    //   }
    // })


    if (navigator.geolocation) {
      
      setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }
          // debugger
          let data = { currentUser: this.props.currentUser , name: this.props.userName, latLng}
      //     // console.log(latLng);
            let locationEmit =  { action: 'sendLocation', value: data};
            this.props.receiveEmit(locationEmit);
      //     walks.emit('sendLocation', data)
      //     // debugger;
        })
      }, 4000)
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