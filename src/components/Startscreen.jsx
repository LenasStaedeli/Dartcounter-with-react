import {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import Game from "./Game.jsx";

export default function Startscreen ({inplegs, setInplegs}){
    const navigate = useNavigate()
    function HandleChange(e){
        e.preventDefault()
        setInplegs(e.target.value)
    }
    function HandleSubmit(e){
        e.preventDefault()
        if (Number(inplegs) !== 0) {
            navigate("/Game")
        }
        else return
    }
    return(
        
        <div className={"legdiv"}>
            <form onSubmit={HandleSubmit}>
                <label htmlFor={"inpleg"} id={"labellegdiv"}>auf wie viele Legs soll gespielt werden? </label>
                <input id={"inplegdiv"} value={inplegs} onChange={HandleChange}/>
                <button id={"btnlegdiv"} type={"submit"}>submit</button>
            </form>
        </div>
    )
}