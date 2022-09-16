import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Contact = () => {
  return (
    <div>
      <Modal />
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to={'/tatiana'} className='ui header'>
          Tatiana
        </Link>
        <p>
          Sit labore eu reprehenderit culpa duis velit. Officia amet nulla
          mollit sunt nulla laboris veniam occaecat. Sit consectetur cupidatat
          incididunt esse officia occaecat do non laborum eu nisi sunt. Laborum
          tempor ex id aute fugiat laboris commodo non mollit. Cillum ipsum esse
          nisi eiusmod sunt ipsum magna laboris velit voluptate eu pariatur.
        </p>
      </div>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to={'/Emily'} className='ui header'>
          Emily
        </Link>
        <p>
          abore eu reprehenderit culpa duis velit. Officia amet nulla mollit
          sunt nulla laboris veni
        </p>
      </div>
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <Link to={'/Krysten'} className='ui header'>
          Krysten
        </Link>
        <p>
          abore eu reprehenderit culpa duis velit. Officia amet nulla mollit
          sunt nulla laboris veni
        </p>
      </div>
    </div>
  );
};

export default Contact;
