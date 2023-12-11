import React, { useState } from 'react'

export function TextForm(props) {
  const handleUpClick = () => {

    let newText = text.toUpperCase()
    setText(newText)
    alert('you text converted to Uppercase')
  }
  const handleLowClick = () => {

    let newText = text.toLowerCase()
    setText(newText)
    alert('you text converted to Lowercase')
  }
  const handleOnChange = (event) => {

    setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text Here');
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"  ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
      </div>
      <div className="container my-3">
        <h1>your text summary</h1>
        <p >{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>

      </div>
    </>
  )
}

