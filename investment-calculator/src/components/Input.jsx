import { useState } from "react";

export default function Input({ id, label, onChange, initialValue }) {
    const [value, setValue] = useState(initialValue);

    function handleChange(event) {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(id, newValue);
    }

    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input type="number" value={value} id={id} onChange={handleChange} required />
        </p>
    )
}