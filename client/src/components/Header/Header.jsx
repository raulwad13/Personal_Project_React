import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Header.css";

class Header extends React.Component {
  state = {
    menuOpen: false,
  };

  handleMenuToggle = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
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
            onClick={this.handleMenuToggle}
          />
        </header>
        {/* <Menu
          isOpen={this.state.menuOpen}
          onClose={this.handleMenuClose}
          right
        >
          <img
            src="../../../public/assets/Palico.png"
            alt="photo"
            className="user-photo"
          />
          <a
            id="home"
            className="menu-item"
            href="/"
            onClick={this.handleMenuClose}
          >
            Home
          </a>
        </Menu> */}
      </>
    );
  }
}

export default Header;
