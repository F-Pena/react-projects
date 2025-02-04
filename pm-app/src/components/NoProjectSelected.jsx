import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3 mx-auto">
            <img src={noProjectImage} alt="No Project Selected" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Start by creating a new project.</p>
            <p className="mt-8">
                <Button type="button" onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    )
}
