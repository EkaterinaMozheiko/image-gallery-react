import React from 'react';
import Button from './button'
import Popup from './popup'
import { connect } from 'react-redux';
import { addImage } from "../actions/image-action";

class PopupButton extends React.Component {
  constructor() {
    super();
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  addImageToStore() {
    const title = document.querySelector('.input_title'),
          url = document.querySelector('.input_url');
    if(!title.value || !url.value) {
      return;
    }
    this.props.addImage(title.value, url.value);
    title.value = "";
    url.value = "";
  }

  render() {
    return (
      <div className="app">
        <Button className="button button_dynamic" type="button" value="New" onClick={() => this.togglePopup()} />
        {this.state.showPopup
          ? (
            <Popup
              closePopup={() => this.togglePopup()}
              addImageToStore={() => this.addImageToStore()}
            />
          )
          : null
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addImage: (title, src) => {
      dispatch( addImage( title, src ) )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupButton);