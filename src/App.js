import React from 'react';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='ui raised very padded text container segment'>
          <ThemeContextProvider>
            <AuthContextProvider>
              <Navbar />
              <TodoList />
            </AuthContextProvider>
          </ThemeContextProvider>
        </div>
      </div>
    );
  }
}

export default App;
