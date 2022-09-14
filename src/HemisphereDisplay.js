import React from 'react';
import './hemisphere.css';
import northernPic from './img/northern.jpg';
import southernPic from './img/southern.jpg';

const hemisphereConfig = {
  Northern: {
    text: 'Northern',
    img: northernPic,
  },
  Southern: {
    text: 'Southern',
    img: southernPic,
  },
};

const HemisphereDisplay = ({ latitude }) => {
  const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
  // create a config obj instead of two ternaries
  // const hemiImg = latitude > 0 ? northernPic : southernPic;
  const { text, img } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      <div className='ui raised text container segment'>
        <div className='image'>
          <img src={img} alt='hemisphere img' width={400} />
        </div>
        <div className='ui teal bottom attached label'>
          You are in the {text} Hemisphere!
        </div>
      </div>
    </div>
  );
};

export default HemisphereDisplay;
