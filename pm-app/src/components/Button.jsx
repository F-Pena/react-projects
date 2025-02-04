export default function Button({ children, ...props }) {
    return (
        <button 
        className="
            bg-stone-700 
            text-gray-400 
            px-4 py-2 rounded-md 
            text-xss md:text-base 
            hover:bg-stone-600 hover:text-stone-100 
            focus-visible:bg-stone-600 
            transition-colors duration-300"
        {...props}>
            {children}
        </button>
    )
}
