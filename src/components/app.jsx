import React, { Component } from 'react';
import SearchBar, { Component } from 'search_bar.jsx';
import Gif, { Component } from 'gif.jsx';
import Giflist, { Component } from 'gif_list.jsx';

class App extends Component {
    render {
        return (
            <div className="left-scene"></div>
                <SearchBar />
                <Gif />
            <div className="right-scene"></div>
                <GifList />
        );
    };
}

export default App;
