import React from 'react';

const RightColumn = ({ username, getLikedPosts, getOwnPosts, getFollows }) => {
  return (
    <div className="right-column">
      <div className="side-panel">
        <div className="side-header">
          {username}
        </div>
        <li className='side-list'>
          <button onClick={getLikedPosts} className="side-link">
            <i className="side-icon">&#xea4f;</i>
            <span className="side-list-text">Your Likes</span>
          </button>
        </li>
        <li className='side-list'>
          <button onClick={getOwnPosts} className="side-link">
            <i className="side-icon">&#xea66;</i>
            <span className="side-list-text">Your Posts</span>
          </button>
        </li>
        <li className='side-list'>
          <button onClick={getFollows} className="side-link">
            <i className="side-icon">&#xea45;</i>
            <span className="side-list-text">Following & Followers</span>
          </button>
        </li>
      </div>
    </div>
  )
};

export default RightColumn;
