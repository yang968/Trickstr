import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setBorderBottom = this.setBorderBottom.bind(this);
  }

  setBorderBottom(pathname) {
    switch (pathname) {
      case "/":
        this.setState({ border: '0px' });
        break;
      default:
        this.setState({ border: '1px solid #515e71'});
        break;
    }
  }

  componentDidMount() {
    this.setBorderBottom(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    this.setBorderBottom(nextProps.location.pathname);
  }

  render() {
    const display = (this.props.currentUser) ? (
      <button className="session-button" onClick={this.props.logout}>Log out</button>
    ) : null;

    return (
      <nav style={{ borderBottom: `${this.state.border}` }} className="nav-bar">
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
