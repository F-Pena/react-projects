import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [name, setName] = useState(null);

  function handleKeyDown(event) {
    if(event.key === 'Enter') {
      handleClick();
    }
  }

  function handleClick() {
    setName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? 'Unknown entity'}</h2>
      <p>
        <input 
          type="text" 
          ref={playerName} 
          onKeyDown={handleKeyDown} 
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
