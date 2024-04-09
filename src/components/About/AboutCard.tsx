import React from 'react';
import Link from 'next/link';

const ImageBackgroundComponent = ({ title, text, buttonText }) => {
  // Define the destination URL here
  const destination = '/services'; // Replace '/your-destination-url' with the actual URL

  return (
    <div className="image-background">
      <div className="overlay">
        <div className="content">
          <div className="header">
            <h1 className="title">{title}</h1>
          </div>
          <div className="body">
            <p className="text">{text}</p>
            <Link className="button" href={destination}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBackgroundComponent;
