import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post };
    console.log(this.state);
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
        <h3 className='post-username' >{this.props.users[this.state.post.user_id].username}</h3>
        {
          this.state.post.contents.length > 0 &&
          this.state.post.contents.map(file => <img className="post-image" src={file.url} alt="IMAGE" />)
        }
        <h5>{this.state.post.title}</h5>
        <p>{this.state.post.description}</p>
      </li>
    )
  }
}

export default PostIndexItem;
