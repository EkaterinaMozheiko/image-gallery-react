import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/button'
import { deleteImage } from '../actions/image-action'

class ImageList extends React.Component {

  deleteImageFromStore(id) {
    this.props.deleteImage(id);
  }

  showList() {
    return this.props.images.map((image) => {
      return (
        <div className="block" key={ image.id }>
          <div className="image-block">
            <div className="image-block__title">{ image.title }</div>
            <Button id={ image.id } className="button button_red" type="button" value="Delete"
                    onClick={this.deleteImageFromStore.bind(this, image.id)}/>
          </div>
          <img className="image" src={ image.src } alt={ image.title }/>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="wrapper-block">
        { this.showList() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteImage: id => {
      dispatch( deleteImage( id ) )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);


