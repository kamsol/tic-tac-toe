import React from 'react';

const Header = ({player}) => {
    return (
        <header>
            <h1>Tic Tac Toe</h1>
            <div className="player-names-container">
                <span className={player === "player_1" ? "active-player" : ""}>Player-1 (O)</span>
                <span className={player === "player_2" ? "active-player" : ""}>Player-2 (X)</span>
            </div>
        </header>

    );
}

export default Header;