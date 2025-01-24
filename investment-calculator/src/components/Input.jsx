import { useState } from "react";

export default function Input({ id, label, onChange }) {
    const [value, setValue] = useState(0);

    function handleChange(event) {
      console.log('on change', id)
        setValue(event.target.value);
        onChange(id, value);
    }

  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input type="number" value={value} id={id} onChange={handleChange} required />
    </p>
  )
}