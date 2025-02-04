import NewTask from "./NewTask";

export default function ProjectTasks({ onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd} />
            <p className="text-stone-800 my-4">
                This project does not have any tasks yet.
            </p>

            <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
            </ul>
        </section>
    )

}
