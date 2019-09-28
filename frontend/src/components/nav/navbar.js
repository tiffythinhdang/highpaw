import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import mainLogo from '../../assets/logo.png';
import iconMenu from '../../assets/small_icon_menu.png';

import MenuContainer from './menu_container';

import '../../stylesheets/nav_bar.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleMenu(){
    let menu = document.getElementById("nav-bar-menu");
    menu.classList.toggle("hidden");
  }
  
  render() {
    return (
      <div className="top-bar container">
        <MenuContainer toggleMenu={this.toggleMenu} />
        <div className="nav-bar container">
          <a className="nav-bar menu-icon">
            <img 
              className="small icon menu"
              id="menu-icon"
              onClick={this.toggleMenu}
              src={iconMenu} 
              alt="menu-icon"/>
          </a>
          <Link className="nav-bar logo" to={'/'}>
            <img src={mainLogo} alt="logo"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);