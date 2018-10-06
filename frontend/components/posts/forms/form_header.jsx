import React from 'react';

const FormHeader = ({ username }) => {
  return (
    <div className="form-header username">
      <a>{username}</a>
    </div>
  )
};

export default FormHeader;
