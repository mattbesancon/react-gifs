import React, { Component } from 'react';
import SearchBar, { Component } from 'search_bar.jsx';
import Gif, { Component } from 'gif.jsx';
import GifList, { Component } from 'gif_list.jsx';

class App extends React.Component {
    render() {
        return (
        <div className="left-scene">   
          <SearchBar />
          <Gif />
        </div>
        );
    }
}

export default App;
