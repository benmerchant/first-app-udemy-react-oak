import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div className='ui list'>
        <p className='item'>Drink local coffee</p>
        <p className='item'>Buy indie records</p>
        <p className='item'>Ride the T home</p>
      </div>
    );
  }
}

export default TodoList;
