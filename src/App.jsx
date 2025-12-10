import './App.css'
import Game from "./components/Game.jsx";
import Startscreen from "./components/Startscreen.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {useState} from "react";

function App() {
    const [inplegs, setInplegs] = useState("")

    return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Startscreen inplegs={inplegs} setInplegs={setInplegs}/>} />
                <Route path="/Game" element={<Game inplegs={inplegs} setInplegs={setInplegs}/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
