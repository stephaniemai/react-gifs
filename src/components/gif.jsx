import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    console.log(this.props.id);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return <img src={src} className="gif" alt="result" onClick={this.handleClick} />;
  }
}

export default Gif;
