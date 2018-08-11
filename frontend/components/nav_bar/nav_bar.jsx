import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setStyle = this.setStyle.bind(this);
  }

  setStyle(pathname) {
    switch (pathname) {
      case "/login":
      case "/":
        this.setState({ borderBottom: '0px', backgroundColor: 'rgba(0,0,0,0)' });
        break;
      default:
        this.setState({ borderBottom: '1px solid #515e71', backgroundColor: '#37465c' });
        break;
    }
  }

  componentDidMount() {
    this.setStyle(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    this.setStyle(nextProps.location.pathname);
  }

  render() {
    const rightButton = (this.props.currentUser) ? (
      <button className="session-button" onClick={this.props.logout}>Log out</button>
    ) : null;

    return (
      <nav style={this.state} className="nav-bar">
        <div className="logo-container">
          <img className="logo" src={window.images.whiteLogo}></img>
        </div>
        <div className="right" >
          {rightButton}
        </div>
      </nav>
    );
  }
}

export default NavBar;
