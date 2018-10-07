import React from 'react';

const ReblogPostContent = ({ user, description }) => {
  return (
    <div className="reblog-post-content">
      <div className="reblog-header">
        <a className="reblog-avatar sub-icon-reblog">
          <img className="reblog-avatar-image" src={user.avatar} alt="avatar" />
        </a>
        <a className="reblog-header-username">
          {user.username}
        </a>
      </div>
      <div className="reblog-post-description">
        {description}
      </div>
    </div>
  )
};

export default ReblogPostContent;
