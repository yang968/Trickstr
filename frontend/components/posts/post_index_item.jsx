 import React from 'react';
 import Footer from './footer';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = { post: this.props.post };
    this.getTitle = this.getTitle.bind(this);
    this.getDescription = this.getDescription.bind(this);
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

  render() {
    // let user
    // if !user return null (or loading component)
    let item = null;
    if (this.state.post.contents.length > 0) {
      item = (<img className="post-image" src={this.state.post.contents[0].url} alt="IMAGE" />)
    }

    let title = this.getTitle();
    let description = this.getDescription();

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
          <Footer post={this.state.post}
            currentUserId={this.props.currentUserId}
            likers={this.props.likers}
            like={this.props.like}/>
        </div>
      </li>
    )
  }
}

export default PostIndexItem;
