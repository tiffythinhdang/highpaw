import React from 'react';
import loadingSpinner from '../../assets/loading_icon.gif'
import '../../stylesheets/loading_spinner.scss';

const LoadingSpinner = () => (
  <div id="loading-container">
    <div id="loading-spinnner-background"></div>
    <div id="loading-spinner">
      <img src={loadingSpinner} alt="loading spinner"/>
    </div>
  </div>
);

export default LoadingSpinner;
