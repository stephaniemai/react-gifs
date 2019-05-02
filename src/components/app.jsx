import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGifId: 'xUPGGDNsLvqsBOhuU0',
      gifList: []
    };
    // this.selectGif('14nFVfaGCfFfqg');
  }

  search = (query) => {
    giphy('CjLxP0mzR2jAMD752sKC7StXEXAkqRyG').search({
      q: query,
      limit: 10
    }, (err, res) => {
      this.setState({
        gifList: res.data
      });
    });
  };

  // selectGif = (gif) => {
  //   this.setState({
  //     selectedGifId: gif,
  //   });
  // };

  render() {
    // const ids = [
    //   {id: "14nFVfaGCfFfqg"},
    //   {id: "hh2143D39Lmfe"}
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList ids={this.state.gifList} />
        </div>
      </div>
    )
  };
}

export default App;
