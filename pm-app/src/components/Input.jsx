const inputClasses = "w-full rounded-md border-0 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

export default function Input({ id, label, type = "text", ref, isTextarea = false, ...props }) {
    return (
        <p className="mb-4">
            <label htmlFor={id} className="block font-bold uppercase text-stone-500">{label}</label>

            {
                isTextarea ? <textarea className={inputClasses} id={id} ref={ref} {...props} /> : 
                <input className={inputClasses} type={type} id={id} ref={ref} {...props} />
            }
        </p>
    )
}
