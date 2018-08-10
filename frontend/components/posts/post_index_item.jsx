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
    if (this.state.post.srcUrl) {
      item = (<img className="post-image" src={this.state.post.srcUrl} alt="IMAGE" />)
    }
    console.log(this.state);
    return (
      <li className='main-post' >
        <h3 className='post-username' >{this.state.post.username}</h3>
        {item}
        <h5>{this.state.post.title}</h5>
        <p>{this.state.post.description}</p>
      </li>
    )
  }
}

export default PostIndexItem;

// this.props.users[this.state.post.userId].username
