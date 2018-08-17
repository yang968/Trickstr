import React from 'react';
import Popover from 'react-awesome-popover';

class AvatarPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = { button: null }
    this.setButton = this.setButton.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({button: this.setButton(newProps.follow)});
  }

  componentDidMount() {
    this.setState({button: this.setButton(this.props.follow)});
  }

  setButton(follow) {
    if (this.props.userId != this.props.currentUserId) {
      if (follow) {
        return <button className="app-btn" onClick={this.props.changeFollow}>Unfollow</button>;
      }
      return <button className="app-btn" onClick={this.props.changeFollow}>Follow</button>;
    }
    return <button className="edit-app-btn">Edit Appearance</button>
  }

  render() {
    let title = this.props.title || "Untitled";
    return (
      <Popover action="hover" placement="bottom">
        <div className="avatar" id="ab" onMouseOver={this.setButton}></div>
        <div className="popup" id="popup">
          <div className="popup-header">
            <h4 className="header-username">{this.props.username}</h4>
            {this.state.button}
          </div>
          <div className="popup-body">
            <div className="avatar-img-div">
              <div className="avatar-img">
              </div>
            </div>
            <div className="popup-user-info">
              <h3 id="pop-title">{title}</h3>
              <p id="pop-desc">{this.props.description}</p>
            </div>
          </div>
        </div>
      </Popover>
    );
  }
}

export default AvatarPopup;
