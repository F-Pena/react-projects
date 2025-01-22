export default function TabButton ({children, isSelected, ...props }) {
    return (
        <li>
            <button type="button" className={isSelected ? 'active' : undefined} {...props}>
                {children} 
            </button>
        </li>
    )
}