import React from 'react';

const ReblogListItem = ({ avatar, username, original }) => {
  let title = null;
  if (original.post_type == "text") title = (
    <div className="reblog-title">
      {original.title}
    </div>
  )
  return (
    <div className="reblog-list-item">
      <div className="reblog-header">
        <a className="reblog-avatar">
          <img className="reblog-avatar-image" src={avatar} alt="avatar" />
        </a>
        <a className="reblog-header-username">
          {username}
        </a>
      </div>
      {title}
      <div className="reblog-description">
        {original.description}
      </div>
    </div>
  )
};

export default ReblogListItem;
