import React from 'react';

const Unit = (props) => {
  const { index, guid, player, play } = props;

  function clickHandler(id) {
    let element = document.getElementById(id);
    let elementContent = element.innerText;
    let changePlayer;

    if (elementContent === null || elementContent === "") {
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
    <button id={guid} className="icons" onClick={() => { clickHandler(guid) }}></button>
  );
}

export default Unit;