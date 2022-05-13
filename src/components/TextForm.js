import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    //For changing text inside text area
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpclick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to LowerCase</button>
                <button className="btn btn-primary " onClick={clearText}>Clear Text</button>
            </div>
            <div >
                <h2 className='my-3'>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Text Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
