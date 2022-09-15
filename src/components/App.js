import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  // async onSearchSubmit(entry) {
  //   const response = await axios.get(
  //     `https://pixabay.com/api/?key=29952099-7f2b47e8d7ddce07445ecc2db&q=${entry}&image_type=photo&pretty=true`
  //   );
  //   this.setState({ images: response.data.hits });
  // }

  onSearchSubmit = async (entry) => {
    const response = await axios.get(
      `https://pixabay.com/api/?key=29952099-7f2b47e8d7ddce07445ecc2db&q=${entry}&image_type=photo&pretty=true`
    );
    this.setState({ images: response.data.hits });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '30px' }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
