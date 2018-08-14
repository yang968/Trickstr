import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post };

    this.getTitle = this.getTitle.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.getControls = this.getControls.bind(this);
  }

  getTitle() {
    if (this.state.post.title !== "") {
      return (
        <div className="title">
          {this.state.post.title}
        </div>
      );
    }
    return null;
  }

  getDescription() {
    if (this.state.post.description !== "") {
      switch (this.props.post.post_type) {
        case "text":
          return (
            <div className="description">
              {this.state.post.description}
            </div>
          );
        case "photo":
          return (
            <div className="caption">
              {this.state.post.description}
            </div>
          );
      }
    }
    return null;
  }

  getControls() {
    if (this.state.post.user_id === this.props.currentUserId) {
      return (
        <div className="controls-self" >
          <i className="control-icon reblog">&#xea8f;</i>
          <i className="control-icon gear">&#xea9a;</i>
        </div>
      )
    }
    return (
      <div className="controls" >
        <i className="control-icon follow">&#xea45;</i>
        <i className="control-icon reblog">&#xea8f;</i>
        <i className="control-icon like">&#xea4e;</i>
      </div>
    )
  }

  render() {
    // let user
    // if !user return null (or loading component)
    let item = null;
    if (this.state.post.contents.length > 0) {
      item = (<img className="post-image" src={this.state.post.contents[0].url} alt="IMAGE" />)
    }

    let title = this.getTitle();
    let description = this.getDescription();
    let controls = this.getControls();
    return (
      <li className='main-post' >
        <div className="post-avatar" >
        </div>
        <div className="post-content" >
          <div className="username">
            <a>{this.props.users[this.state.post.user_id].username}</a>
          </div>
          {
            this.state.post.contents.length > 0 &&
            this.state.post.contents.map((file, idx) => <img key={idx} className="post-image" src={file.url} alt="IMAGE" />)
          }
          { title }
          { description }
          <div className="tags">
          </div>
          <div className="source">
          </div>
          <div className="footer">
            <div >
              <span className="notes">notes</span>
            </div>
            { controls }
          </div>
        </div>
      </li>
    )
  }
}

export default PostIndexItem;
