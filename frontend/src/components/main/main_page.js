import React from 'react';
import MapContainer from '../map/map_container';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Splash Page</h1>
        <MapContainer />
      </div>
    );
  }
}

export default MainPage;