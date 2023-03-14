import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slideshow.css'

const slideImages = [
  './../assets/img/EasyRep_Sofa.png',
  './../assets/img/EasyRep_Sofa.png',
  './../assets/img/EasyRep_Sofa.png'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Foto 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Foto 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Foto 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;