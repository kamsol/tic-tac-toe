import React from 'react';
import './App.css';
import Header from './components/header';
import Board from './components/board';

class App extends React.Component {


  state = {
    units: [],
    player: 'player-1'
  }

  play = (player) => {
    this.setState({player});
  }
  render() {

    return (
      <div className="container">
        <Header player={this.state.player}/>
        <Board  player={this.state.player} play={this.play} />
      </div>
    );
  }
}

export default App;
