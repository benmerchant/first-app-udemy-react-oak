import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class TodoList extends React.Component {
//   static contextType = ThemeContext; // consume context
//   render() {
//     const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//     const theme = isDarkTheme ? darkTheme : lightTheme;
//     return (

//     );
//   }
// }

const TodoList = () => {
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        height: '140px',
        textAlign: 'center',
      }}
    >
      <p className='item'>Drink local coffee</p>
      <p className='item'>Buy indie records</p>
      <p className='item'>Ride the T home</p>
      <button className='ui button primary' onClick={changeTheme}>
        change the theme
      </button>
    </div>
  );
};

export default TodoList;
