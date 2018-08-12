import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post };
  }

  render() {
    // let user
    // if !user return null (or loading component)
    let item = null;
    if (this.state.post.contents.length > 0) {
      item = (<img className="post-image" src={this.state.post.contents[0].url} alt="IMAGE" />)
    }
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
            this.state.post.contents.map(file => <img className="post-image" src={file.url} alt="IMAGE" />)
          }
          <div className="title">
            {this.state.post.title}
          </div>
          <div className="description">
            <p >{this.state.post.description}</p>
          </div>
          <div className="tags">
          </div>
          <div className="source">
          </div>
          <div className="footer">
            <div >
              <span classNames="notes">notes</span>
            </div>
            <div className="controls" >
              <i className="control-icon reblog">&#xea8f;</i>
              <i className="control-icon like">
                <span>
                  &#xea4e;
                </span>
              </i>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default PostIndexItem;
