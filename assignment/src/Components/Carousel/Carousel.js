import React from 'react';
import './Carousel.css';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100  d-block'
        itemId={1}
        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-interior-design-instagrams-1555611071.jpg' alt='...' >
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-gifts-for-crafters-1664477480.png' alt='...'>
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easy-crafts-for-kids-1650558831.jpg?crop=1.00xw:0.699xh;0,0.174xh&resize=1200:*' alt='...'>
      
      </MDBCarouselItem>
    </MDBCarousel>
  );
}