import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const display = (this.props.currentUser) ? (
      <button className="session-button" onClick={this.props.logout}>Log out</button>
    ) : null;

    return (
      <nav className="nav-bar">
        <div className="logo-container">
          <img className="logo" src={window.images.whiteLogo}></img>
        </div>
        <div className="right" >
          {display}
        </div>
      </nav>
    );
  }
}

export default NavBar;
