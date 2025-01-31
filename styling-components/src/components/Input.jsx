export default function Input({ label, invalid, ...props }) {
    const labelClasses = `
        block 
        mb-2 
        text-xs 
        font-bold 
        tracking-wide uppercase 
        ${invalid ? 'text-red-500' : 'text-stone-200'}`
    ;
    const inputClasses = `
        border-width-1 
        rounded-md 
        py-3 px-4 
        w-full 
        box-shadow-sm 
        ${invalid ? 'bg-red-200 border-red-500 text-red-800' : 'bg-white border-transparent'}
    `;
    return (
        <p>
        <label htmlFor={props.id} className={labelClasses}>{label}</label>
        <input className={inputClasses} {...props} />
        </p>
    );
}