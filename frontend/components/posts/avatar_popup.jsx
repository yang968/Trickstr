import React from 'react';
import Popover from 'react-awesome-popover';

class AvatarPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { button: null }
    this.setButton = this.setButton.bind(this);
  }

  componentWillReceiveProps(newProps) {
    debugger;
    this.setState({button: this.setButton(newProps.follow)});
  }

  componentDidMount() {
    this.setState({button: this.setButton(this.props.follow)});
  }

  setButton(follow) {
    if (this.props.userId != this.props.currentUserId) {
      if (follow) {
        return <button onClick={this.props.changeFollow}>Unfollow</button>;
      }
      return <button onClick={this.props.changeFollow}>Follow</button>;
    }
    return <button>Edit Appearance</button>
  }

  render() {
    return (
      <Popover action="hover" placement="bottom">
        <div className="avatar" id="ab" onMouseOver={this.setButton}></div>
        <div className="popup" id="popup">
          <h4>{this.props.username}</h4>
          {this.state.button}
        </div>
      </Popover>
    );
  }
}

export default AvatarPopup;
