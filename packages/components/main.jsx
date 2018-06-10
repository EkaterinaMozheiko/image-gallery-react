import React from 'react';
import Header from './header';
import ImageBlock from './image-block';
import ImageList from '../containers/image-list'
import PopupButton from './popup';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PopupButton />
      </div>
      <div className="container">
        <ImageList />
      </div>
    </div>

  );
};

export default Main;
