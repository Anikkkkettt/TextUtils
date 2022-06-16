import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }

    //For changing text inside text area
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared text", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div style={{color : props.mde === 'dark'?'white':'black'}}>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} style={{backgroundColor: props.mde==='dark'?'#1b1a36':'white',color : props.mde === 'dark'?'white':'black' }} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpclick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to LowerCase</button>
                <button className="btn btn-primary " onClick={clearText}>Clear Text</button>
            </div>
            <div style={{color: props.mde === 'dark'?'white':'black'}}>
                <h2 className='my-3'>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Text Preview</h3>
                <p>{text.length>0?text:"Enter text above to preview it here"}</p>
            </div>
        </>
    )
}
