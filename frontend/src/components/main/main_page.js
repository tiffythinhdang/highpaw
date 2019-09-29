import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/main_page.scss';

import waggingDogGIF from '../../assets/wagging_dog.gif';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page container">
        <div className="main-page infor">
          <div className="main-page header">
            <p>Feeling down?</p>
            <p className="main-message">Pet a dog near you now!</p>
          </div>

          <div className="main-page button-container">
            <Link to={'/signup'}>
              <button className="main large button">Get Started!</button>
            </Link>
            <Link to={'/login'}>
              <button className="secondary medium button">Log In</button>
            </Link>
          </div>
        </div>
        
        <div className="main-page gif-container">
          <img 
            className="main-page wagging-gif"
            src={waggingDogGIF}
            alt="walking-dog-gif"
          />
        </div>
      </div>
    );
  }
}

export default MainPage;