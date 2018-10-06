import React from 'react';
import ReactDOM from 'react-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexItemContainer from './post_index_item_container';
import PostForm from './post_form';
import RightColumn from './right_column';
import { Link } from 'react-router-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';

const mainDivRef = React.createRef();

class PostIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      follows: false,
      showMyPosts: false
    }

    let bgDiv = document.getElementById('bgDiv');
    this.getLikedPosts = this.getLikedPosts.bind(this);
    this.getOwnPosts = this.getOwnPosts.bind(this);
    this.getFollows = this.getFollows.bind(this);
  }

  componentDidMount() {
    this.props.fetchPosts();
    bgDiv.classList.remove("background");

    this.mainDiv = ReactDOM.findDOMNode(mainDivRef.current);
  }

  getLikedPosts() {
    this.setState({
      follows: false,
      showMyPosts: false
    }, () => {
      this.props.fetchLikedPosts(this.props.currentUser.id);
    })
  }

  getOwnPosts() {
    this.setState({
      follows: false,
      showMyPosts: true
    }, () => {
      this.props.fetchOwnPosts(this.props.currentUser.id);
    });
  }

  getFollows() {
    this.setState({follows: true, showMyPosts: false}, () => {
      this.props.fetchFollows(this.props.currentUser.id);
    });
  }

  render(){
    let currentUserId = this.props.currentUser.id;
    let username = this.props.currentUser.username;

    const PostFormWithRef = React.forwardRef((props, ref) => (
      <PostForm mainDiv={this.mainDiv} ref={ref}
        currentUserId={currentUserId}
        avatar={this.props.currentUser.avatar}
        username={username}
        title={this.props.currentUser.title}
        description={this.props.currentUser.description}/>
    ));

    let content = null;
    if (this.state.follows) {
      content = (
      <div className="left-column">
        <div className="follows-div">
          <div className="follows-wrapper">
            <Tabs defaultTab="one">
              <TabList>
                <Tab tabFor="one">Following</Tab>
                <Tab tabFor="two">Followers</Tab>
              </TabList>
              <TabPanel tabId="one">
                <ul className="follow-list">
                  {this.props.follows.map(user => (
                    <li key={user.id} className="follow-list-item">
                      <div className="follow-list-item-div">
                        <img className="follow-avatar" src={user.avatar} alt="avatar" />
                        <div className="follow-info">
                          {user.username}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabPanel>
              <TabPanel tabId="two">
                <ul className="follow-list">
                  {this.props.followers.map(user => (
                    <li key={user.id} className="follow-list-item">
                      <div className="follow-list-item-div">
                        <img className="follow-avatar" src={user.avatar} alt="avatar" />
                        <div className="follow-info">
                          {user.username}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>);
    } else {
      let posts = (this.state.showMyPosts) ? Object.values(this.props.posts).filter(post => post.user_id == this.props.currentUser.id) : Object.values(this.props.posts)
      content = (
      <div className="left-column" >
        <PostFormWithRef ref={mainDivRef}/>
        <ol className="main-posts" >
          { posts.map(post => {
            let user = this.props.users[post.user_id];
            let original = this.props.posts[post.reblog_id];
            let like = (original) ? this.props.likes[original.id] : this.props.likes[post.id];
            return (
              <PostIndexItemContainer
                user={user}
                currentUserId={currentUserId}
                post={post}
                like={like}
                follow={ (this.props.follows && this.props.follows.some(follower => (follower.id == post.user_id))) }
                key={post.id}
                updatePost={this.props.updatePost}
                deletePost={this.props.deletePost}
                original={original}
                author={(original != null) ? this.props.users[original.user_id] : null}
              />
            )
          })}
        </ol>
      </div>
      );
    }

    return (
      <div>
        <NavBarContainer page="main" />
        <div className="main-container" >
          <div className="main-content clearfix">
            {content}
            <RightColumn username={this.props.currentUser.username}
              getLikedPosts={this.getLikedPosts}
              getOwnPosts={this.getOwnPosts}
              getFollows={this.getFollows}
            />
          </div>
        </div>
        <div ref={mainDivRef} className="mainDiv animated" id="mainDiv"></div>
      </div>
    );
  }
}

export default PostIndex;
