import React from 'react';
import Button from './button'

const Popup = ({ closePopup }) => (
  <div className="popup">
    <div className="popup_inner">
      <h2>New Image</h2><br />
      <input className="input" placeholder="Title" /><br />
      <input className="input" placeholder="URL" /><br />
      <div className="button-wrapper">
        <Button className="button" type="button" value="Close" onClick={closePopup} />
        <Button className="button" type="button" value="Add" />
      </div>
    </div>
  </div>
);

class PopupButton extends React.Component {
  constructor() {
    super();
    this.state = { showPopup: false };
  }

  togglePopup() {
    // event.preventDefault();
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
            />
          )
          : null
        }
      </div>
    );
  }
}

export default PopupButton;
