import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = (currentUser) ? (
    <div>
      <p>Hello {currentUser.username}</p>
    </div>
  ) : null;

  return (
    <header>
      {display}
    </header>
  );
}
