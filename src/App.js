import React from 'react';
import axios from 'axios';

class App extends React.Component {
  url = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor() {
    super();
    axios.get(this.url).then((res) => {
      console.log(res.data);
    });
  }
  render() {
    return <div className='App'>Heyooo</div>;
  }
}

export default App;
