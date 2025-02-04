import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAddProject, onCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();
    const modal = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;

        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });

    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-800 mb-4">Please enter a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem]">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button 
                        type="button" 
                        className="
                        bg-transparent 
                        text-black 
                        px-6 py-2 rounded-md 
                        text-xss md:text-base 
                        hover:bg-red-600 hover:text-stone-100 
                        focus-visible:bg-stone-600 
                        transition-colors duration-300" 
                        onClick={onCancel}
                    >
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className="
                            bg-stone-800 
                            text-stone-50 
                            px-6 py-2 rounded-md 
                            hover:bg-stone-950
                            transition-colors duration-300"
                            onClick={handleSave}
                        >
                            Save
                        </button>

                    </li>
                </menu>
                <div>
                    <Input id="title" label="Title" ref={titleRef} />
                    <Input id="description" label="Description" isTextarea ref={descriptionRef} />
                    <Input id="dueDate" label="Due Date" type="date" ref={dueDateRef} />
                </div>

            </div>
        </>

    )
}
