import logo from './logo.svg';
import './App.css';
import { Abc } from './navbar.js';
import { TextForm } from './components/TextForm.js'
import About from './components/About.js';

function App() {

    return (
        <div>
            <Abc />
            <div className="container my-3" >
                <TextForm heading="Enter The Text to analyze below" />
                <About></About>
            </div>


        </div>
    )


}



export default App;
