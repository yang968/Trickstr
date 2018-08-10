import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.post };
  }

  render() {
    return (
      <li>
        {this.state.post.title}
      </li>
    )
  }
}

export default PostIndexItem;
