import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Header.css";

class Header extends React.Component {
  state = {
    menuOpen: false,
  };

  handleMenuOpen = () => {
    this.setState({ menuOpen: true });
  };

  handleMenuClose = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <>
        <header>
          <h1>MONSTER MAPS</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5895/5895397.png"
            alt="Menu"
            className="menu-icon"
            onClick={this.handleMenuOpen}
          />
        </header>
        <Menu isOpen={this.state.menuOpen} onClose={this.handleMenuClose} rigth>
          
          <img src="https://static.zerochan.net/Palico.full.2260499.png" alt="photo" className="user-photo"/>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
        </Menu>
      </>
    );
  }
}

export default Header;
