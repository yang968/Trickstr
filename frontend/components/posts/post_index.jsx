import React from 'react';
import ReactDOM from 'react-dom';

import PostIndexItem from './post_index_item';
import PostForm from './post_form';

const mainDivRef = React.createRef();

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();

    this.mainDiv = ReactDOM.findDOMNode(mainDivRef.current);
  }

  render(){
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
                  <PostIndexItem users={this.props.users}
                    currentUserId={currentUserId}
                    post={post}
                    likers={post.likers}
                    like={ (this.props.likes.hasOwnProperty(post.id)) ? true : false }
                    key={post.id} />
                ))}
              </ol>
            </div>
            <div className="right-column">
              <p>In Construction</p>
            </div>
          </div>
        </div>
        <div ref={mainDivRef} className="mainDiv animated" id="mainDiv"></div>
      </div>
    );
  }
}

export default PostIndex;
