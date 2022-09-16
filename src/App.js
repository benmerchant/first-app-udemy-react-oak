import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';
// import RouteWrapper from './route-wrapper';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className=''>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/:user' element={<Card />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;