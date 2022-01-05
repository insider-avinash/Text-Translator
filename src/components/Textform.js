import React, {useState} from 'react';
import copy from "copy-to-clipboard";

export default function Textform(props) {
    const [text, setText] = useState("");

    const handleUpclick =()=>{
        // console.log("Uppercase is Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowclick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () =>{
        let newText = '';
        setText(newText);
    }

    const copyToClipboard = ()=>{
        let newText = text;
        copy(text);
        alert(`You have copied the text`); 
    }

    const onChangeHandle = (event) =>{
        // console.log("Onchanged Called");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
          <div className="form-group">
            <textarea className="form-control" id="myBox" value={text} placeholder='Enter text here' onChange={onChangeHandle} rows="8"></textarea>
            <button className='btn btn-primary my-3' onClick={handleUpclick}>Convert to UPPERCASE</button>
            <button className='btn btn-primary m-3' onClick={handleLowclick}>Convert to lowercase</button>
            <button className='btn btn-primary m-3' onClick={clearText}>Clear Text</button>
            <button className='btn btn-primary m-3' onClick={copyToClipboard}>Copy to Clipboard</button>

        </div>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(' ').length} Words and {text.length} Charactors</p>
            <p>{0.008 * text.split(' ').length }Minute to read </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
