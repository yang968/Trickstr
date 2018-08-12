import React from 'react';
import PostIndexItem from './post_index_item';
import PostForm from './post_form';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render(){
    return (
      <div className="main-container" >
        <div className="main-content clearfix">
          <div className="left-column" >
            <PostForm currentUserId={this.props.currentUserId} />
            <ol className="main-posts" >
              { this.props.posts.map(post => <PostIndexItem users={this.props.users} post={post} key={post.id} />) }
            </ol>
          </div>
          <div className="right-column">
            <p>In Construction</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostIndex;
