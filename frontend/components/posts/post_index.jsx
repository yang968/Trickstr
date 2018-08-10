import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){
    return (
      <div className="main-container" >
        <ol className="main-posts" >
          { this.props.posts.map(post => <PostIndexItem post={post} key={post.id} />) }
        </ol>
      </div>
    );
  }
}

export default PostIndex;
