import React, { Component } from 'react';

import giphy from './giphy_logo_white_large.png';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <>
        <input
          type="text"
          className="form-control form-search"
          onChange={this.handleUpdate}
        />
        <h4>
          Giphy does not allow my app to use the API so if you want to check how the app works,
          you can go to my github and run it locally. You can find it at
          <a href="https://github.com/mattbesancon/react-gifs"> https://github.com/mattbesancon/react-gifs</a>
        </h4>
        <img src={giphy} alt="giphy_logo_white" />
      </>
    );
  }
}

export default SearchBar;
