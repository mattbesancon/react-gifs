import React, { Component } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const REACT_APP_GIPHY_KEY = 'S84EFr0ZvMN1J9Up6R6j5ftMUL6QfHBZ';

const giphy = new GiphyFetch(REACT_APP_GIPHY_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    giphy.search({
      apiKey: REACT_APP_GIPHY_KEY,
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
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
