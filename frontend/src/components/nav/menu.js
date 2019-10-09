import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import iconCloseWhite from '../../assets/small_icon_close_white.png';
import iconCloseHover from '../../assets/small_icon_close_hover_pink.png';
import '../../stylesheets/index.scss';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  hoverCloseIcon(e) {
    e.target.src = iconCloseHover;
  }

  unhoverCloseIcon(e) {
    e.target.src = iconCloseWhite;
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout()
    this.props.history.push('/');
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
        let clickedMenuIcon = menuIcon.contains(e.target);
        if (!clickedInsideNavBar && !clickedMenuIcon) {
          navBar.classList.add("hidden");
        }
      }
    })
  }

  render() {
    this.closeSidebar()

    return (
      <div id="nav-bar-menu" className="nav-bar menu hidden">
        <button className="nav-bar close-icon">
          <img
            className="small icon close"
            onClick={this.props.toggleMenu}
            onMouseEnter={this.hoverCloseIcon}
            onMouseLeave={this.unhoverCloseIcon}
            src={iconCloseWhite}
            alt="close-icon" />
        </button>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(Menu);