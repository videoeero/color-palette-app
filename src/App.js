import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Palette from './component/Palette';
import SingleColorPalette from './component/SingleColorPalette';
import PaletteList from './component/PaletteList';
import seedColors from './seedColors.js';
import { generatePalette } from './colorHelpers';

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          parth='/palette/:paletteId/:colorId'
          render={() => <SingleColorPalette />}
        />
      </Switch>
    );
  }
}

export default App;
