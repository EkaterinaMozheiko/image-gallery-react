import React from 'react';
import Button from './button'

let Popup = ({ closePopup,  addImageToStore }) => {

  return (
    <div className="popup">
      <div className="popup_inner">
        <h2>New Image</h2><br />
        <input className="input input_title" placeholder="Title" /><br />
        <input className="input input_url" placeholder="URL" /><br />
        <div className="button-wrapper">
          <Button className="button" type="button" value="Close" onClick={ closePopup } />
          <Button className="button" type="button" value="Add" onClick={ addImageToStore }/>
        </div>
      </div>
    </div>
  )
};

export default Popup;
