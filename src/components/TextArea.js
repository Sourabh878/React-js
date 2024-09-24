import React, { useState } from 'react';
import './textarea.css';

export default function TextArea(props) {
    const [text, setText] = useState(" ");

    const buttonClick = () => {
        setText(text.toUpperCase()); // Convert text to uppercase on button click
        console.log("Change Button Clicked");
    };

    const onChangeListen = (event) => {
        setText(event.target.value); // Update text when user types
    };
    const tolowercase = ()=>
    {
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const buttonClear =()=>
    {
        setText("");
    }
    
    return (
        <>
        <div className="container my-3">
            <div className="mb-3">
                <h1>{props.heading}</h1> {/* Corrected to proper heading tag */}
                <label htmlFor="text-area" className="form-label">Text Area</label>
                <textarea
                    className="form-control"
                    onChange={onChangeListen}
                    value={text}
                    id="text-area"
                    rows="3"
                ></textarea>
            </div>
            <button className="nayak" onClick={buttonClick}>Change</button>
            <button className="nayak" onClick={tolowercase}>lowercase</button>
            <button className="nayak" onClick={buttonClear}>clear</button>


        </div>
        <div className="container">
        <h1>Text Summary</h1>
        <p>letter count {text.length}</p>
        <p>Word count {text.split(" ").length - 1}</p>
        <h1>Time to read the content {0.008* text.split(" ").length}</h1>
        <h2>Text Preview</h2>
        <p>{text}</p>

      </div>
    </>
    );
}
