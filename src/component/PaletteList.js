import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

export class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    return (
      <div>
        <h1>React colors</h1>
        <MiniPalette />
        {palettes.map(palette => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
