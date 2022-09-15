import React from 'react';

class SearchInput extends React.Component {
  // constructor() {
  //   super();
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = { entry: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <div className='ui massive icon input'>
              <input
                type='text'
                placeholder='search here...'
                onChange={(e) => this.setState({ entry: e.target.value })}
                value={this.state.entry}
              />
              <i className='search icon'></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
