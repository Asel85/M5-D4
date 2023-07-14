import React from 'react';
import { nanoid } from 'nanoid';
import Carousel from 'react-bootstrap/Carousel';
import { carouselItems } from '../data/carouselItems';

const Carousello = () => {
  return (
    <Carousel>
     {carouselItems.map((item)=>{
        return(
            <Carousel.Item>
                <img
                className={item.className}
                src={item.src}
                alt={item.alt}
                key={nanoid()}
                />
                <Carousel.Caption>
                    <h1>{item.captionTitle}</h1>
                    <p>{item.captionDescription}</p>
                </Carousel.Caption>
                </Carousel.Item>
        )
}
)}
        
     </Carousel>
     )}

export default Carousello;
