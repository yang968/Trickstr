import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      validEmail: false
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    e.preventDefault();
    this.setState({ validEmail: true });
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    let user = { email: this.state.email, password: this.state.password };
    this.props.login(user)
      .then(() => this.props.history.replace('/posts'))
  }

  render() {
    if (this.state.validEmail) {
      return (
        <div className="user-div">
          <h1 className="signin animated fadeInUp">trickstr</h1>
          <div className="form-container">
            <form className="user-form">
              <input type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                placeholder="Email"
                className="user-input top-input animated fadeInUp"
                />
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder="Password"
                className="user-input bottom-input animated fadeInDown"
                />
              <ul className="user-errors" >
                { this.props.errors && this.props.errors.map((err) => (<li className="user-errors-list animated fadeInDown" >{err}</li>)) }
              </ul>
              <button className="button-user button-main animated fadeInDown" onClick={this.handleSubmit}>Log In</button>
            </form>
          </div>
        </div>
      );
    }
    return (
      <div className="user-div" >
        <div className="animated fadeInUp" >
          <h1 className="signin">trickstr</h1>
          <div className="form-container">
            <form className="user-form">
              <input type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                placeholder="Email"
                className="user-input"
                style={{borderRadius: '2px'}}
                />
              <ul className="user-errors" >
                { this.props.errors && this.props.errors.map((err) => (<li className="user-errors-list animated fadeInDown" >{err}</li>)) }
              </ul>
              <button className="button-user button-main" onClick={this.handleEmail}>Next</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signin;
