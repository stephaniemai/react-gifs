import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    const ids = [
      {id: "14nFVfaGCfFfqg"},
      {id: "hh2143D39Lmfe"}
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="60PwNotVjPFYs" />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={ids} />
        </div>
      </div>
    )
  };
}

export default App;
