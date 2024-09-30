import React, { useState } from 'react';
import './textarea.css';

export default function TextArea(props) {
    const [text, setText] = useState(" ");

    const buttonClick = () => {
        setText(text.toUpperCase()); // Convert text to uppercase on button click
        props.alert("Converted to Upper Case","Success");
    };

    const onChangeListen = (event) => {
        setText(event.target.value); // Update text when user types
    };
    const tolowercase = ()=>
    {
        let newtext=text.toLowerCase();
        setText(newtext);
        props.alert("Converted to Lower Case","Success");
    }
    const buttonClear =()=>
    {
        setText("");
        props.alert("Cleared Successfully","Success");
    }
    const rcolor={
        backgroundColor:"red",
        color:"white"
    };
    
    const bcolor={
        backgroundColor:"blue",
        color:"white"
    };
    
    return (
        <>
        <div className="container my-3">
            <div className="mb-3">
                <h1 className={`text-${props.theme === "light"?'dark':'light'}`} >{props.heading}</h1> {/* Corrected to proper heading tag */}
               
                <textarea
                    className={`form-control bg-${props.theme === 'light'?'light':'dark'} text-${props.theme === 'light'?'dark':'light'}`}
                    onChange={onChangeListen}
                    
                    value={text}
                    id="text-area"
                    rows="3"
                   
                ></textarea>
            </div>
            <button className="nayak" style={props.theme == "light"? bcolor:rcolor} onClick={buttonClick}>Change</button>
            <button className="nayak" style={props.theme == "light"? bcolor:rcolor} onClick={tolowercase}>lowercase</button>
            <button className="nayak" style={props.theme == "light"? bcolor:rcolor} onClick={buttonClear}>clear</button>


        </div>
        <div className={`container text-${props.theme === "light"?'dark':'light'}`}>
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
