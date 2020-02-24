import React from 'react';
import './App.css';
import Header from './components/header';
import Board from './components/board';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.player_1 = "player_1"; // (O)
    this.player_2 = "player_2"; // (X)
    this.winner = '';
    this.tmpUnits = [];
    this.isWinner = false;
    this.resultRef = React.createRef();
    this.containerKey = new Date();
    this.initilSatet = {
      units: new Array(9),
      player: 'player_1',
      winner: ''
    }
    this.state = { ...this.initilSatet };
  }


  play = (player, index) => {
    let currrentPlayer = this.state.player;
    let playerSign = this.state.player === this.player_1 ? "O" : "X";
    this.tmpUnits = [...this.state.units];
    this.tmpUnits[index] = playerSign;
    this.setState({
      units: this.tmpUnits,
      player
    },
      () => {
        let validLength = this.tmpUnits.filter(x => x !== undefined).length;
        if (validLength > 4)
          this.checkWinner(index, currrentPlayer)
      }
    );
  }


  checkWinner(index, currrentPlayer) {
    let list = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < list.length; i++) {
      if (list[i].includes(index)) {

        if (this.tmpUnits[list[i][0]] === this.tmpUnits[list[i][1]] && this.tmpUnits[list[i][1]] === this.tmpUnits[list[i][2]]) {
          this.isWinner = true
          this.setState({
            winner: currrentPlayer
          });
          this.resultRef.current.classList.remove('display-none');
          break;
        }
      }
    }

    if (!this.tmpUnits.includes(undefined)) {
      console.log('1')
      if (!this.isWinner) {
        console.log('2')
        this.setState({
          winner: 'No winner!'
        });
        this.resultRef.current.classList.remove('display-none');
      }
    }
  }

  resetState() {
    this.setState(this.initilSatet);
    this.isWinner = false;
    this.resultRef.current.classList.add('display-none');
    this.containerKey = new Date();
  }


  render() {
    return (
      <div className="application-wrapper">
        <div key={this.containerKey} ref={this.containerRef} className="container">
          <Header player={this.state.player} />
          <Board units={this.state.units} player={this.state.player} play={this.play} />
        </div>
        <div id="result" ref={this.resultRef} className="result-container display-none">
          <section className="result-section">
            <p>The winner is: <span>{this.state.winner}</span></p>
            <button type="button" onClick={() => { this.resetState() }}>Play again</button>
          </section>
        </div>
      </div>
    )
  }
}

export default App;

