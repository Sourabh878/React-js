import React, { useState } from 'react';
import './textarea.css';

export default function TextArea(props) {
    const [text, setText] = useState("Hello My name is Nayak");
    // const [name, setName] = useState("My father's name is Madan");

    const buttonClick = () => {
        
        setText(text.toUpperCase()); // Corrected toUpperCase() method
        console.log("Change Button Clicked");
    };

    return (
        <div className="container my-3">
            <div className="mb-3">
                <h>{props.heading}</h>
                <label htmlFor="text-area" className="form-label"></label>
                <textarea className="form-control" value={text} id="text-area" rows="3" readOnly></textarea>
            </div>
            <button className="nayak" onClick={buttonClick}>Change</button>
        </div>
    );
}
