import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const REACT_APP_GIPHY_KEY = 'S84EFr0ZvMN1J9Up6R6j5ftMUL6QfHBZ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
    fetch(`${BASE_URL}?api_key=${REACT_APP_GIPHY_KEY}&q=${query}`)
      .then(response => response.json())
      .then((result) => {
        this.setState({
          gifs: result.data
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
