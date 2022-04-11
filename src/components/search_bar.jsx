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
        <img src={giphy} alt="giphy_logo_white" />
      </>
    );
  }
}

export default SearchBar;
