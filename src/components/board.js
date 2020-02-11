import React from 'react';
import Unit from './unit';

const Board = (props) => {
    const { player, play } = props;
    return (
        <div className="units-container">
            {[...Array(9)].map((x, i) =>
                <Unit guid={`unit-${++i}`} player={player} key={i} play={play} />
            )}
        </div>
    )
}

export default Board;