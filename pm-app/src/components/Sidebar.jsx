import Button from "./Button";

export default function Sidebar({ 
    onStartAddProject, 
    projects, 
    onSelectProject,
    selectedProject
}) {
    return (
        <aside className="bg-stone-900 text-stone-50 rounded-r-xl px-8 py-16">


            <h2 className="text-2xl font-bold mb-8 uppercase md:text-xl text-stone-200">Your Projects</h2>
            <Button type="button" onClick={onStartAddProject}>+ Add Project</Button>
            <ul className="mt-6 flex flex-col gap-2">
                {projects.map(project => {
                    const cssClasses = `w-full text-left ${project.id === selectedProject ? "bg-stone-700 text-stone-100" : "text-stone-400"} px-2 py-1 rounded-sm my-1 hover:bg-stone-700 hover:text-stone-100 transition-colors duration-300`;
                    return (
                        <li key={project.id}>
                            <button 
                                type="button" 
                                className={cssClasses}
                                onClick={() => onSelectProject(project.id)}
                            >
                                {project.title}
    
                            </button>
                        </li>
    
                    )
                })}
            </ul>
        </aside>
    )

}