import React from 'react';
import { Link } from 'react-router-dom';
import iconMenuWhite from '../../assets/small_icon_menu_white.png';
import '../../stylesheets/index.scss';

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
        <div className="session links">
          <div className="link inactive">
            <p>Welcome back!</p>
          </div>

          <div className="link" onClick={this.props.toggleMenu}>
            <Link to={`/`}>Main</Link>
          </div>

          <div className="link" onClick={this.props.toggleMenu}>
            <Link to={`/walks`}>Active Walks</Link>
          </div>

          <div className="link" onClick={this.props.toggleMenu}>
            <Link to={`/users/${this.props.currentUserId}`}>Profile</Link>
          </div>

          <div className="link logout-button-container" onClick={this.props.toggleMenu}>
            <button className="medium secondary button" onClick={this.logoutUser}>Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="session links">
          <div className="singup link">
            <Link to={'/signup'} onClick={this.props.toggleMenu}>Signup</Link>
          </div>
          <div className="login link" >
            <Link to={'/login'} onClick={this.props.toggleMenu}>Login</Link>
          </div>
        </div>
      );
    }
  }

  closeSidebar() {
    document.addEventListener('click', function(e) {
      const navBar = document.getElementById('nav-bar-menu');
      const menuIcon = document.getElementById('menu-icon');
      if (navBar) {
        let clickedInsideNavBar = navBar.contains(e.target)
        if (!clickedInsideNavBar || !menuIcon) {
          navBar.classList.add("hidden");
        }
      }
    })
  }

  render() {
    this.closeSidebar()

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