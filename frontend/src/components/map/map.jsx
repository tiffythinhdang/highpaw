import React from 'react';
import { withRouter } from 'react-router-dom';
const google = window.google

class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markers: {},
      infoWindow: {}
    }
  }

  componentDidMount() {
    
    const mapOptions = {
      center: { lat: 37.798887, lng: -122.401373 }, 
      zoom: 17
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    
    if (this.props.location.pathname.includes('walks')) {
      this.props.approved.forEach((room) => {
        this.props.receiveRoom(room)
      })
      this.sendLocation(this.props.approved)
    } else {
      debugger
      this.props.receiveRoom(this.props.match.params.requestId)
      let rooms = [this.props.match.params.requestId];
      this.sendLocation(rooms);
    }

    let locationCallBack = (data) => {
      let location = data.latLng;
      let user = data.currentUser.id;
      let icon = {
        url: data.currentUser.profilePhotoUrl,
        scaledSize: new google.maps.Size(35, 35),
      }
      
      if (this.state.markers[user]) {
        this.state.markers[user].setPosition(location)
      } else {

        let infoWindow = new google.maps.InfoWindow({
          content: data.currentUser.name
        })
        // debugger;
        this.state.infoWindow[user] = infoWindow;

        let marker = new google.maps.Marker({
          position: location,
          map: this.map,
          icon: icon,
          // label: data.currentUser.name
        })

        marker.addListener('click', () => {
          // debugger;
          this.state.infoWindow[user].open(this.map, this.state.markers[user]);
        })
        
        this.state.markers[user] = marker;
        this.map.setCenter(location)
      }

      
    }

    let locationListener = { action: 'sendLocation', callback: locationCallBack}

    this.props.receiveListener(locationListener)
  }

  sendLocation(rooms) {
    

    if (navigator.geolocation) {
      this.locationInterval = setInterval(() => {
        rooms.forEach(room => {
          navigator.geolocation.getCurrentPosition((position) => {
            let latLng = { lat: position.coords.latitude, lng: position.coords.longitude }
            let data = { currentUser: this.props.currentUser, latLng, room }
            let locationEmit = { action: 'sendLocation', value: data }
            this.props.receiveEmit(locationEmit)
          })
        })
      }, 4000)
    }

  }

  componentWillUnmount() {
    
    clearInterval(this.locationInterval)
    if (this.props.location.pathname.includes('walks')) {
      this.props.approved.forEach((room) => {
        this.props.receiveLeaveRoom(room)
      })
      
    } else {
      this.props.receiveLeaveRoom(this.props.match.params.requestId)
    }
  }


  render() {

    let image = document.querySelector(`img[src='${this.props.currentUser.profilePhotoUrl}']`)
    if (image) {
      image.style.borderRadius = '32px';
      image.style.boxSizing = 'border-box'
      image.style.border = '3px solid #ff8847';
    }
    
    return (
      

        <div id="map-container" ref={map => this.mapNode = map}>
        </div>
        
    
    )
  }
}

export default withRouter(Map)