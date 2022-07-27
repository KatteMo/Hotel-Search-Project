import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselImg1, CarouselImg2, CarouselImg3 } from '../../etc/imagesImport';
import './HotelsCarousel.css';

const items = [
  <img className="slide" src={CarouselImg1} alt="img" />,
  <img className="slide" src={CarouselImg2} alt="img" />,
  <img className="slide" src={CarouselImg3} alt="img" />,
];

const HotelsCarousel = () => (
  <div className="carousel">
    <AliceCarousel
      autoWidth
      animationType="slide"
      disableDotsControls
      disableButtonsControls
      infinite
      mouseTracking
      touchTracking
      autoPlay
      autoPlayInterval={1500}
      animationDuration={1500}
      autoPlayStrategy="none"
      items={items}
    />
  </div>
);

export default HotelsCarousel;
