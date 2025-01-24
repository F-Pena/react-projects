import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName, ContainerElement = 'li' }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if(isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <ContainerElement className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? 
                    <input type="text" value={playerName} autoFocus required onChange={handleChange} /> : 
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button 
                type="button" 
                className="player-button" 
                aria-label="Edit Player Name" 
                onClick={handleEditClick}>
                    {isEditing ? "Save" : "Edit" }
                </button>
        </ContainerElement>
    )
}

