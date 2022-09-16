import React from 'react';
import '../styles/modal.css';

const About = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='modal'>
          <div className='modal-content'>
            <h3>Modal Content</h3>
          </div>
        </div>
      </div>

      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <h3 className='ui header'>About</h3>
        <p>
          Laborum mollit duis excepteur id do deserunt. Occaecat tempor
          exercitation dolor pariatur reprehenderit sint magna irure magna nulla
          excepteur ipsum voluptate. Aliqua ipsum exercitation occaecat esse
          aliqua aliqua. Deserunt do Lorem aute exercitation minim cillum sunt
          reprehenderit fugiat consectetur sunt duis excepteur. Irure non
          reprehenderit officia est non ullamco amet commodo in proident
          exercitation id mollit consectetur.
        </p>
      </div>
    </div>
  );
};

export default About;
