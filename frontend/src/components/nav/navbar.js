import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/logo.png';

import '../../stylesheets/nav_bar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="personal greeting">
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="session links">
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="nav-bar container">
        {this.getLinks()}
        <a>
          <img src={mainLogo} />
        </a>
      </div>
    );
  }
}

export default NavBar;