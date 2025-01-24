export default function Log({ turns }) {


    return (
        <ol id="log">
            {turns.map((turn, index) => {
                const {square, player} = turn;
                const {row, cell} = square;
                return (
                    <li key={`log-${row}-${cell}`}>
                        {player} selected {row}, {cell}
                    </li>
                )
            })}
        </ol>
    )
}