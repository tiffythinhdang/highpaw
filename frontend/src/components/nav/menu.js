import React from 'react';
import { Link } from 'react-router-dom';
import iconMenuWhite from '../../assets/small_icon_menu_white.png';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="personal greeting">
          <p>Welcome back!</p>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="session links">
          <div className="singup link">
            <Link to={'/signup'}>Signup</Link>
          </div>
          <div className="login link">
            <Link to={'/login'}>Login</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="nav-bar-menu" className="nav-bar menu hidden">
        <a className="nav-bar menu-icon">
          <img
            className="small icon menu"
            onClick={this.props.toggleMenu}
            src={iconMenuWhite}
            alt="menu-icon" />
        </a>
        {this.getLinks()}
      </div>
    );
  }
}

export default Menu;