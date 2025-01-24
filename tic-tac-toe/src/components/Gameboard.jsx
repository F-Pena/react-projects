export default function Gameboard({ onSelectSquare, board }) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, cellIndex) => (
                            <li key={cellIndex}>
                                <button 
                                    type="button" 
                                    className="square" 
                                    aria-label="Click to play" 
                                    onClick={() => onSelectSquare(rowIndex, cellIndex)} 
                                    disabled={!!playerSymbol}
                                >
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}