import { useState } from "react";

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleClick(){
        setEnteredTask("");
        onAdd(enteredTask);
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={e => setEnteredTask(e.target.value)} value={enteredTask}/>
            <button type="button" className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
        </div>
    )
}
