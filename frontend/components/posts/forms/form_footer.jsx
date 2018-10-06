import React from 'react';

const FormFooter = ({ cancelPost, button }) => {
  return (
    <div className="form-footer">
      <div className="form-close">
        <button onClick={cancelPost()} className="form-button close-button fff">Close</button>
      </div>
      <div className="form-post">
        {button}
      </div>
    </div>
  )
};

export default FormFooter;
