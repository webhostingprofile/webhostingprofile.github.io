'use client';
import React, { useState, useRef } from 'react';
import '../../styles/carousel.css'; // Import your CSS file here

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === itemsRef.current.children.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? itemsRef.current.children.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-red text-black">
    <div className="carousel-container">
      <div className="slide" ref={itemsRef}>
        <div className={`item ${currentIndex === 0 ? 'active' : ''}`} style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)' }}>
          <div className="content">
            <div className="name">Switzerland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={`item ${currentIndex === 1 ? 'active' : ''}`} style={{ backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)' }}>
          <div className="content">
            <div className="name">Finland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={`item ${currentIndex === 2 ? 'active' : ''}`} style={{ backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)' }}>
          <div className="content">
            <div className="name">Iceland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={`item ${currentIndex === 3 ? 'active' : ''}`} style={{ backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)' }}>
          <div className="content">
            <div className="name">Australia</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={`item ${currentIndex === 4 ? 'active' : ''}`} style={{ backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)' }}>
          <div className="content">
            <div className="name">Netherland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
        <div className={`item ${currentIndex === 5 ? 'active' : ''}`} style={{ backgroundImage: 'url(https://i.ibb.co/RNkk6L0/img6.jpg)' }}>
          <div className="content">
            <div className="name">Ireland</div>
            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button>See More</button>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="prev" onClick={prevSlide}><i className="fa-solid fa-arrow-left">&lt;</i></button>
        <button className="next" onClick={nextSlide}><i className="fa-solid fa-arrow-right">&gt;</i></button>
      </div>
    </div>
    </div>
  );
}
