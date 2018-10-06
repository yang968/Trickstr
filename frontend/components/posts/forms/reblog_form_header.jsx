import React from 'react';

const ReblogFormHeader = ({ username, author }) => {
  return (
    <div className="reblog-form-header">
      <a>{username}</a>
      <i className="reblog-icon">&#xea92;</i>
      <span className="reblog-author HelveticaNeue">{author}</span>
    </div>
  )
};

export default ReblogFormHeader;
