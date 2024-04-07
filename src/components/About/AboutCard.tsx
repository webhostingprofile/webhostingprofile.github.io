import React from 'react';

const ImageBackgroundComponent = ({ title, text, buttonText }) => {
  return (
    <div className="image-background">
      <div className="overlay">
        <div className="content">
          <div className="header">
            <h1 className="title">{title}</h1>
          </div>
          <div className="body">
            <p className="text">{text}</p>
            <button className="button">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackgroundComponent;
