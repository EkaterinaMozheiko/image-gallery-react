import React from 'react';
import Header from './header';
import ImageBlock from './image-block';
import PopupButton from './popup';

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <PopupButton />
      </div>
      <div className="container">
        <ImageBlock />
      </div>
    </div>

  );
};

export default Main;
