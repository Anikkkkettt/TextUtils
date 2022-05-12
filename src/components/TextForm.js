import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    //For changing text inside text area
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter your sentence");
    return (
        <div>
        <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
        </div>
    )
}
