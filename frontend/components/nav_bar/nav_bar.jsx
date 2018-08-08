import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = (currentUser) ? (
    <div>
      <p>Hello {currentUser.username}</p>
      <button onClick={logout}>Log out</button>
    </div>
  ) : null;

  return (
    <header>
      {display}
    </header>
  );
}
