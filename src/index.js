import React from 'react';
import ReactDOM from 'react-dom';

const App = function () {
  const buttonText = 'Click me NOW!';
  function getButtonText() {
    return buttonText;
  }

  const buttonTextStr = 'Heyooooo World!';
  const buttonTextInt = 123;
  const buttonTextArr = ['Heyooooo', 'Yall'];

  const buttonTextObj = { text: 'RESISTANCE IS FULTILE' };

  const style = { backgroundColor: 'red', color: 'white' };

  return (
    <div>
      <label htmlFor='name' className='label'>
        Enter Email
      </label>
      <input id='name' />
      {/* Style prop value must be an object (eslintreact/style-prop-object) */}
      <button style={style}>{buttonTextObj.text}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
