import React from 'react';
import './App.css';
import Header from './components/header';
import Board from './components/board';

class App extends React.Component {

  state = {
    units: new Array(9),
    player: 'player-1'
  }
 

  play = (player) => {
    this.setState({player});
  }
  render() {

    return (
      <div className="container">
        <Header player={this.state.player}/>
        <Board  units={this.state.units} player={this.state.player} play={this.play} />
      </div>
    );
  }
}

export default App;
