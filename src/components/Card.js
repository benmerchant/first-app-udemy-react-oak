import React from 'react';
import componentWithRouter from '../route-wrapper';

class Card extends React.Component {
  state = { user: '' };
  componentDidMount() {
    let user = this.props.params.user;
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <div
        className='ui raised very padded text container segment'
        style={{ marginTop: '80px' }}
      >
        <h3 className='ui header'>{user}</h3>
      </div>
    );
  }
}

export default componentWithRouter(Card);
