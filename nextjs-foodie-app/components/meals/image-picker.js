"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const inputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  function handlePickImage() {
    inputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if(!file) {
        setPickedImage(null);
        return;
    }
    
    const fileReader = new FileReader();

    fileReader.onload = () => {
        setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
        {!pickedImage && (
             <p>No image picked yet.</p>
        )}
        {pickedImage && (
            <Image src={pickedImage} alt="Image selected by user" fill />
        )}
        </div>
        <input
          id={name}
          name={name}
          type="file"
          accept="image/png, image/jpeg"
          className={classes.input}
          ref={inputRef}
          onChange={handleImageChange} 
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickImage}
        >
          Upload
        </button>
      </div>
      
    </div>
  );
}
