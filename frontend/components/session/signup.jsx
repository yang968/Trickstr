import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleInput = this.handleInput.bind(this);
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
    return (
      <div>
        <p>Come for what you love. Stay for what you discover.</p>
        <form>
          <input type="text"
            value={this.state.email}
            onChange={this.handleInput('email')}
            placeholder="Email"
            />
          <input type="password"
            value={this.state.password}
            onChange={this.handleInput('password')}
            placeholder="Password"
            />
          <input type="text"
            value={this.state.username}
            onChange={this.handleInput('username')}
            placeholder="Username"
            />
          <button onClick={this.handleSubmit}>Sign up<button/>
        </form>
      </div>
    );
  }
}

export default Signup;
