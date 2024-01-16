import React, { useState } from 'react'

export function TextForm(props) {
  const handleUpClick = () => {

    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("convertwed to uppercase", "success")

  }
  const handleLowClick = () => {

    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("convertwed to lowercase", "success")

  }
  const handleClear = () => {

    let newText = "";
    setText(newText)
    props.showAlert("All text are clear", "success")

  }




  const handleOnChange = (event) => {

    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743', }} id="myBox" rows="8"  ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>

      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>your text summary</h1>
        <p >{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}Minutes read</p>
        <h2>preview</h2>
        <p>{text.length}</p>
        <p style={{ fontWeight: 'bold' }}>{text.length} characters in this paragraph.</p>
        <p>{text.length > 0 ? text : "Enter Something Here...."}</p>

      </div>
    </>
  )
}

