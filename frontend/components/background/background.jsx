import React from 'react';

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setBackground = this.setBackground.bind(this);
  }

  setBackground(pathname) {
    switch (pathname) {
      case "/":
        this.setState({ color: 'rg' });
        break;
      default:
        this.setState({ border: '1px solid #515e71'});
        break;
    }
  }

  componentDidMount() {
    this.setBackground(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    this.setBackground(nextProps.location.pathname);
  }

  render() {
    const display = (this.props.currentUser) ? (
      <button className="session-button" onClick={this.props.logout}>Log out</button>
    ) : null;

    return (
      <nav style={{background: this.state.border}} className="nav-bar">
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

export default Background;
