import Tasks from "./Tasks";

export default function SelectedProject({ 
    project, 
    handleDeleteProject, 
    onAdd, 
    onDelete 
}) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',

        month: 'long',
        day: 'numeric',
    });
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex gap-4 items-center justify-between">
                    <h1 className="text-2xl font-bold text-stone-700">{project.title}</h1>
                    <button type="button" onClick={() => handleDeleteProject(project.id)}>Delete</button>
                </div>

                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAdd={onAdd} onDelete={onDelete}/>
        </div>
    )
}
