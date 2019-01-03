import React from 'react';

const Error = (props) => {
  return (
    <div id="error-popup" className="flex-row">
      <div className="invisible-close"
           onClick={() => {
             const errorPopup = document.getElementById("error-popup");
             errorPopup.classList.add("hide");
           }}>
      </div>
      <h3 id="error-dialog" className="heading-text flex-col">There was a problem with your request, please try again.</h3>
    </div>
  );
}

export default Error;
