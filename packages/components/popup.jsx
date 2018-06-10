import React from 'react';
import Button from './button'
import { connect } from 'react-redux'
import { addImage } from '../actions'

let Popup = ({ closePopup,  dispatch }) => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h2>New Image</h2><br />
        <form onSubmit={handleSubmit = (e) => {
          e.preventDefault();
          const inputTitle = document.querySelector('.input_title'),
            inputURL = document.querySelector('.input_url');
          console.log(inputTitle);
          dispatch(addImage(inputTitle.value, inputURL.value));
          inputTitle.value = '';
          inputURL.value = '';
        }}>
          <input className="input input_title" placeholder="Title" /><br />
          <input className="input input_url" placeholder="URL" /><br />
          <div className="button-wrapper">
            <Button className="button" type="button" value="Close" onClick={closePopup} />
            <Button className="button" type="submit" value="Add"/>
          </div>
        </form>
      </div>
    </div>
  )
};


class PopupButton extends React.Component {
  constructor() {
    super();
    this.state = { showPopup: false };

  }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }


  render() {
    return (
      <div className="app">
        <Button className="button" type="button" value="New" onClick={() => this.togglePopup()} />
        {this.state.showPopup
          ? (
            <Popup
              closePopup={() => this.togglePopup()}
              addImage = {this.addImage}
            />
          )
          : null
        }
      </div>
    );
  }
}

Popup = connect()(Popup);

export default PopupButton;
