import { useState, useRef } from 'react';
import ResultModel from './ResultModel.jsx';

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer = useRef();
    const dialog = useRef();

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);


        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
        setTimerExpired(false);
    }

  return (
    <>
        <ResultModel ref={dialog} result="lost" targetTime={targetTime} onClose={handleStop} />
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime === 1 ? '' : 's'}
            </p>
            <p>
                <button type="button" onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'}
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>

                {timerStarted ? 'Timer is running...' : 'Timer Inactive'}
            </p>
        </section>
    </>

  );
}