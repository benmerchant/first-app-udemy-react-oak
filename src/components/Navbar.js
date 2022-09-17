import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <h2 className='ui centered header'>Benjamin's React Learning Time</h2>
        <div className='ui three buttons'>
          <button className='ui button'>Books</button>
          <button className='ui button'>TV/Movies</button>
          <button className='ui button'>Musical Artists</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
