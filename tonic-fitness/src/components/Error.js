import React from 'react';

const Error = (props) => {
  return (
    <div className="error-popup flex-col">
      <h3 className="heading-text">{props.error}</h3>
    </div>
  );
}

export default Error;
