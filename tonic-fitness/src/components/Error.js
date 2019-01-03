import React from 'react';

const Error = (props) => {
  return (
    <div id="error-popup" className="hide flex-row">
      <div className="invisible-close"
           onClick={() => {
             const errorPopup = document.getElementById("error-popup");
             errorPopup.classList.add("hide");
           }}>
      </div>
      <h3 id="error-dialog" className="heading-text flex-col">""</h3>
    </div>
  );
}

export default Error;
