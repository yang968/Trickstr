import React from 'react';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        <ul>
        </ul>
      </div>
    );
  }
}

export default PostIndex;
