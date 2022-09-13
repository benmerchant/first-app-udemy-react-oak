import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
import tatiana from './images/tatiana.jpg';
import emily from './images/emily.jpg';
import krysten from './images/krysten.jpg';

const App = () =>{
  return (
    <div className='ui comments'>
      <UserCard>
        <SingleComment
          name='emily'
          text='go sox'
          date='Today at 00:00' 
          pfp={emily}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name='tatiana'
          text='dont make me angry'
          date='Thursday at 03:00' 
          pfp={tatiana}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name='krysten'
          text='secure the bag'
          date='Wednesday at 21:00' 
          pfp={krysten}
        /> 
      </UserCard>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
