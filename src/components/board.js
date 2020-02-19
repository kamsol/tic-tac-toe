import React from 'react';
import Unit from './unit';

const Board = (props) => {
    const { units, player, play } = props;
    return (
        <div className="units-container">
            {[...units].map((x, i) =>
                <Unit index={i} guid={`unit-${++i}`} player={player} key={i} play={play} />
            )}
        </div>
    )
}

export default Board;