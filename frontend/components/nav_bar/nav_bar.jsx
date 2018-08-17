import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rightButton: null,
    }

    this.setStyle = this.setStyle.bind(this);
  }

  setStyle(page) {
    switch (page) {
      case "signup":
        this.setState({ rightButton: <button className="session-button">Sign In</button> });
        break;
      case "signin":
        this.setState({ rightButton: <button className="session-button">Sign Up</button> });
        break;
      case "main":
        this.setState({ rightButton: <button className="session-button" onClick={this.props.logout}>Log out</button>})
        break;
      default:
        null;
    }
  }

  // setStyle(pathname) {
  //   if (pathname === "/login" || pathname === "/") {
  //     this.setState({ borderBottom: '0px', backgroundColor: 'rgba(0,0,0,0)' });
  //   } else {
  //     this.setState({ borderBottom: '1px solid #515e71', backgroundColor: '#37465c' });
  //   }
  // }

  componentDidMount() {
    this.setStyle(this.props.page);
  }

  componentWillReceiveProps(nextProps) {
    this.setStyle(nextProps.page);
  }

  render() {
    // const rightButton = (this.props.currentUser) ? (
    //   <button className="session-button" onClick={this.props.logout}>Log out</button>
    // ) : null;
    // this.setStyle();
    return (
      <nav style={this.state} className="nav-bar">
        <div className="logo-container">
          <img className="logo" src={window.images.whiteLogo}></img>
        </div>
        <div className="right" >
          {this.state.rightButton}
        </div>
      </nav>
    );
  }
}

export default NavBar;
// {rightButton}
