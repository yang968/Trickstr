import React from 'react';
import ReactDOM from 'react-dom';

import PostIndexItem from './post_index_item';
import PostForm from './post_form';

import { Link } from 'react-router-dom';

const mainDivRef = React.createRef();

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.getLikedPosts = this.getLikedPosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();

    this.mainDiv = ReactDOM.findDOMNode(mainDivRef.current);
  }

  getLikedPosts() {
    this.props.fetchLikedPosts(this.props.currentUser.id);
  }

  render(){
    console.log(this.props);
    let currentUserId = this.props.currentUser.id;
    let username = this.props.currentUser.username;

    const PostFormWithRef = React.forwardRef((props, ref) => (
      <PostForm mainDiv={this.mainDiv} ref={ref} currentUserId={currentUserId} username={username}/>
    ));

    return (
      <div>
        <div className="main-container" >
          <div className="main-content clearfix">
            <div className="left-column" >
              <PostFormWithRef ref={mainDivRef}/>
              <ol className="main-posts" >
                { this.props.posts.map(post => (
                  <PostIndexItem
                    username={this.props.users[post.user_id].username}
                    currentUserId={currentUserId}
                    post={post}
                    likers={post.likers}
                    like={ (this.props.likes.hasOwnProperty(post.id)) ? this.props.likes[post.id] : null }
                    key={post.id}
                    updatePost={this.props.updatePost}
                    deletePost={this.props.deletePost}
                    />
                ))}
              </ol>
            </div>
            <div className="right-column">
              <div className="side-panel">
                <div className="side-header">
                  {this.props.currentUser.username}
                </div>
                <li className='side-list'>
                  <button onClick={this.getLikedPosts} className="side-link">
                    <i className="side-icon">&#xea4f;</i>
                    <span className="side-list-text">Your Likes</span>
                  </button>
                </li>
                <li className='side-list'>
                  <Link to="#" className="side-link">
                    <i className="side-icon">&#xea45;</i>
                    <span className="side-list-text">Following</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div ref={mainDivRef} className="mainDiv animated" id="mainDiv"></div>
      </div>
    );
  }
}

export default PostIndex;
