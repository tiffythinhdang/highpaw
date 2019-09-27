import React from 'react';
import Map from '../map/map';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <Link to="/walks" >
          <h1>Splash Page</h1><br></br><br></br>
        </Link>
        <Map />
      </div>
    );
  }
}

export default MainPage;