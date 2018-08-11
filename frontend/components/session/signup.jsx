import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      getStarted: false,
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGetStarted = this.handleGetStarted.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleGetStarted(e) {
    e.preventDefault();
    this.setState({ getStarted: true });
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
      .then(() => this.props.history.replace('/posts'))
  }

  demoLogin(e) {
    e.preventDefault();
    let demoUser = { email: 'guest@guest.com', password: 'guestguest'}
    this.props.login(demoUser)
      .then(() => {
        this.props.history.replace('/posts')
      })
  }

  render() {
    let catchphrase = (
      <h2 className="subheading" >Come for what you love.<br></br>
      Stay for what you discover.</h2>
    );

    if (this.state.getStarted) {
      return (
        <div className="user-div" >
          <h1>trickstr</h1>
          {catchphrase}

            <form className="user-form">
              <div className="form-container" >
              <input type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                placeholder="Email"
                className="user-input top-input animated slideInRight"
                />
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder="Password"
                className="user-input animated slideInRight"
                />
              <input type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                placeholder="Username"
                className="user-input bottom-input animated slideInRight"
                />
              </div>
              <ul className="user-errors" >
                { this.props.errors && this.props.errors.map((err) => (<li className="user-errors-list animated fadeInDown" >{err}</li>)) }
              </ul>
              <button className="button-user button-main animated slideInDown" onClick={this.handleSubmit}>Sign up</button>
            </form>

        </div>
      );
    }
    return (
      <div className="user-div" >
        <div className="animated fadeInUp delay-1s" >
          <h1>trickstr</h1>
          {catchphrase}
          <button className="button-user button-main" onClick={this.handleGetStarted}>Get Started</button>
          <Link className="login-link button-user" to="/login">Log In</Link>
          <button className="button-user button-main" onClick={this.demoLogin}>Demo Login</button>
        </div>
      </div>
    )
  }
}

export default Signup;
