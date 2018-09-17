import React from 'react';
import ReactDOM from 'react-dom';
import TextForm from './forms/text';
import PhotoForm from './forms/photo';

import AvatarPopup from './avatar_popup';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post_type: 0
    };

    this.setPostType = this.setPostType.bind(this);
    this.cancelPost = this.cancelPost.bind(this);
    this.getForm = this.getForm.bind(this);
  }

  setPostType(type) {
    return (e) => {
      this.setState({ post_type: type });
    };
  }

  cancelPost() {
    return (e) => {
      let mainDiv = document.getElementById('mainDiv');
      mainDiv.classList.remove("mainDiv-show", "fadeIn");
      this.setState({ post_type: 0 });
    };
  }

  getForm() {
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.classList.add("mainDiv-show", "fadeIn");

    switch (this.state.post_type) {
      case 1:
        return <TextForm cancelPost={this.cancelPost.bind(this)}
                  avatar={this.props.avatar}
                  userId={this.props.currentUserId}
                  username={this.props.username}/>;
      case 2:
        return <PhotoForm cancelPost={this.cancelPost.bind(this)}
                  avatar={this.props.avatar}
                  userId={this.props.currentUserId}
                  username={this.props.username}/>;
      default:
        return null;
    }
  }

  render() {
    if (this.state.post_type > 0) {
      return (
        this.getForm()
      );
    }
    return (
      <div className="post-form-container">
        <div className="post-avatar" >
          <AvatarPopup
            follow={false}
            avatar={this.props.avatar}
            currentUserId={this.props.currentUserId}
            changeFollow={null}
            userId={this.props.currentUserId}
            username={this.props.username}
            title={this.props.title}
            description={this.props.description}/>
        </div>
        <div className="new-post-wrapper">
          <a className="post-link one" onClick={this.setPostType(1)}>
            <i className="text-icon icon">&#60023;</i>
            <span className="new-post-span">Text</span>
          </a>
          <a className="post-link two" onClick={this.setPostType(2)}>
            <i className="photo-icon icon">&#60019;</i>
            <span className="new-post-span">Photo</span>
          </a>
          <a className="post-link three disabled">
            <i className="quote-icon icon">&#60021;</i>
            <span className="new-post-span">Quote</span>
          </a>
          <a className="post-link four disabled">
            <i className="link-icon icon">&#60016;</i>
            <span className="new-post-span">Link</span>
          </a>
          <a className="post-link five disabled">
            <i className="chat-icon icon">&#60012;</i>
            <span className="new-post-span">Chat</span>
          </a>
          <a className="post-link six disabled">
            <i className="audio-icon icon">&#60010;</i>
            <span className="new-post-span">Audio</span>
          </a>
          <a className="post-link seven disabled">
            <i className="video-icon icon">&#60025;</i>
            <span className="new-post-span">Video</span>
          </a>
        </div>
      </div>
    );
  }
}

export default PostForm;
