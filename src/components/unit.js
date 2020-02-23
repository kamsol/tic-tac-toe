import React from 'react';

const Unit = (props) => {
  const { index, guid, player, play } = props;

  function clickHandler(event) {

    let element = event.target; // document.getElementById(event.target.id);
    let changePlayer;

    if (element.innerText === null || element.innerText === "") {
      if (player === "player_1") {
        element.innerText = "O";
        element.classList.add("circle");
        changePlayer = "player_2";
        play(changePlayer, index)
      } else {
        element.innerText = "X";
        element.classList.add("cross");
        changePlayer = "player_1";
        play(changePlayer, index)
      }
    }
  }
  return (
    <button id={guid} className="icons" onClick={(event) => { clickHandler(event) }}></button>
  );
}

export default Unit;