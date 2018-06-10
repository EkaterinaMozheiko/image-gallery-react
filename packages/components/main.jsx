import React from 'react';
import Header from './header';
import ImageList from '../containers/image-list'
import PopupButton from './popup-button';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PopupButton />
      </div>
      <div className="container">
        <div className="wrapper">
          <ImageList />
        </div>
      </div>
    </div>
  );
};

export default Main;
