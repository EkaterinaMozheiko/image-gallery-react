import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../components/button'

class ImageList extends React.Component {
  showList() {
    return this.props.images.map((image) => {
      return (
        <div className="block" key={image.id}>
          <div className="image-block">
            <div className="image-block__title">{image.title}</div>
            <Button className="button button_red" type="button" value="Delete" />
          </div>
          <img className="image" src={image.src} alt={image.alt}/>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.showList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images,
  };
}

export default connect(mapStateToProps)(ImageList);


