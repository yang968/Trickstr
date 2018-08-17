import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rightButton: null,
      tabBar: null,
      style: {}
    }

    this.setStyle = this.setStyle.bind(this);
  }

  setStyle(page) {
    switch (page) {
      case "signup":
        this.setState({ rightButton: <Link className="signup-button animated fadeIn" to="/login">Log In</Link>,
            style: { borderBottom: '0px', backgroundColor: 'rgba(0,0,0,0)' }
          });
        break;
      case "signin":
        this.setState({ rightButton: <Link className="signin-button animated fadeIn" to="/">Sign Up</Link>,
            style: { borderBottom: '0px', backgroundColor: 'rgba(0,0,0,0)' }
          });
        break;
      case "main":
        this.setState({ rightButton: <button className="main-button animated fadeIn" onClick={this.props.logout}>Log out</button>,
            tabBar: (<button onClick={() => window.location.reload()} className="nav-icon">
                      <i className="side-icon">&#xea4c;</i>
                    </button>),
            style: { borderBottom: '1px solid #515e71', backgroundColor: '#37465c' }
          })
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
    return (
      <nav style={this.state.style} className="nav-bar">
        <div className="logo-container">
          <img className="logo" src={window.images.whiteLogo}></img>
        </div>
        <div className="nav-div">
          <div className="middle">
            <div className="search-div">
              <input className="search" type="text" placeholder="Search Tumblr" />
            </div>
          </div>
          <div className="right-nav" >
            <div className="nav-icons">
              {this.state.tabBar}
            </div>
            {this.state.rightButton}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
