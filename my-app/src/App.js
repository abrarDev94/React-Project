import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import { TextForm } from './components/TextForm.js'
import About from './components/About.js';
import React, { useState } from 'react'

function App() {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === "light") {
            setMode('dark')
            document.body.style.backgroundColor = '#042743'
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
        }
    }
    return (
        <div>
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            <div className="container my-3" >
                <TextForm heading="Enter The Text to analyze below" mode={mode} />
                <About></About>
            </div>


        </div>
    )


}



export default App;
