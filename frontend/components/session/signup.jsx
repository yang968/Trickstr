import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      getStarted: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGetStarted = this.handleGetStarted.bind(this);
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
      .then(() => this.props.history.push('/posts'))
  }

  render() {
    let catchphrase = (
      <h2 className="subheading" >Come for what you love.<br></br>
      Stay for what you discover.</h2>
      )
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
                className="user-input top-input"
                />
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder="Password"
                className="user-input"
                />
              <input type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                placeholder="Username"
                className="user-input bottom-input"
                />
              </div>
              <button className="button-user button-main" onClick={this.handleSubmit}>Sign up</button>
            </form>

        </div>
      );
    }
    return (
      <div className="user-div" >
        <h1>trickstr</h1>
        {catchphrase}
        <button className="button-user button-main" onClick={this.handleGetStarted}>Get Started</button>
        <Link className="button-main login-link button-user" to="/login">Log In</Link>
      </div>
    )
  }
}

export default Signup;
