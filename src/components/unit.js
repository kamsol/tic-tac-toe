import React from 'react';

const Unit = (props) => {
    const {guid, player, play} = props;
    
    function clickHandler (id){
        let element = document.getElementById(id);
        let elementContent = element.innerText;
        let changePlayer;
        
        if(elementContent === null || elementContent === ""){
        if(player === "player-1"){
            element.innerText ="O";
            element.classList.add("circle");
            changePlayer ="player-2";
            play(changePlayer)
        }else{
          element.innerText ="X";
          element.classList.add("cross");
          changePlayer ="player-1";
          play(changePlayer)
        }
      }
    }
    return ( 
        <button id={guid} className="icons"  onClick={() => {clickHandler(guid)}}></button>
     );
}
 
export default Unit;