import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='ui raised very padded text container segment'>
          <ThemeContextProvider>
            <Navbar />
            <TodoList />
          </ThemeContextProvider>
        </div>
      </div>
    );
  }
}

export default App;
