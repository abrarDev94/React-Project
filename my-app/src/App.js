import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import { TextForm } from './components/TextForm.js'
import About from './components/About.js';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
import Monthlyincome from './Monthlyincome.js';
import AddUser from './Crud.js';





import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom"


function App() {




    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    const toggleMode = () => {
        if (mode === "light") {
            setMode('dark')
            document.body.style.backgroundColor = '#042743'
            showAlert("Dark mode has been enabled", "success")
        } else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enabled", "success")
        }
    }
    return (
        <div>
            {/*<AddUser />*/}

            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />

                <div className="container my-3" >
                    <Routes>
                        <Route path="/about" element={<About />} />


                        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />

                    </Routes>


                </div>
                {/*< Monthlyincome />*/}
            </Router>


        </div>


    )


}



export default App;
