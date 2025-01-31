export default function ResultModel({ ref, result, targetTime, onClose}) {
    return (
        <dialog className="result-modal" ref={ref}>
            <h2>Your {result}</h2>
            <p>Your target time was <strong>{targetTime} seconds.</strong>.</p>
            <p>
                You stopped the timer with <strong>X seconds left.</strong>
            </p>
            <form method="dialog">
                <button onClick={onClose}>Close</button>
            </form>
        </dialog>
    )
}   