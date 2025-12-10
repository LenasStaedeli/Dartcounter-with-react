import {use, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Game({inplegs, setInplegs}) {
    const [player1, setPlayer1] = useState(501)
    const [player2, setPlayer2] = useState(501)
    const [calcButtons, setCalcButtons] = useState(Array(20).fill(0))
    const [turn, setTurn] = useState(0)
    const [count, setCount] = useState(0)
    const [neg, setNeg] = useState(0)
    const [doubleTriple, setDoubletriple] = useState(1)
    const [legsp1, setLegsp1] = useState(0)
    const [legsp2, setLegsp2] = useState(0)
    const [starter, setStarter] = useState(0)
    const [winnertext, setWinnertext] = useState("")
    const navigate = useNavigate()

    function onClick(idx) {
        if (winnertext === "Spieler 1 hat gewonnen" || winnertext === "Spieler 2 hat gewonnen") return;
        console.log(inplegs)
        if (idx * doubleTriple === 75) {
            setDoubletriple(1)
            return;

        }
        if (turn === 0) {
            setPlayer1(player1 - idx * doubleTriple)
            setCount(count + 1)
            setDoubletriple(1)
        } else {
            setPlayer2(player2 - idx * doubleTriple)
            setCount(count + 1)
            setDoubletriple(1)
        }
        if (count === 2) {
            setTurn(turn === 1 ? 0 : 1)
            setCount(0)
        }
    }

    function Handleerneutsp() {
        navigate("/")
    }

    useEffect(() => {
        if (count === 0) {
            setNeg(turn === 0 ? player1 : player2);
        }
    }, [turn, player1, player2, count]);

    useEffect(() => {
        if (player1 === 0 || player2 === 0) {
            const newStarter = starter === 0 ? 1 : 0;
            const newLegsp1 = player1 === 0 ? legsp1 + 1 : legsp1;
            const newLegsp2 = player2 === 0 ? legsp2 + 1 : legsp2;
            setLegsp2(player2 === 0 ? legsp2 + 1 : legsp2)
            setPlayer2(501)
            setLegsp1(player1 === 0 ? legsp1 + 1 : legsp1)
            if (newLegsp1 === parseInt(inplegs)) {
                setWinnertext("Spieler 1 hat gewonnen");
            } else if (newLegsp2 === parseInt(inplegs)) {
                setWinnertext("Spieler 2 hat gewonnen");
            }
            setPlayer1(501)
            setCount(0)
            setStarter(newStarter)
            setTurn(newStarter)
        }
        if (player1 < 0 || player2 < 0) {
            if (turn === 0) {
                setPlayer1(neg)
                setTurn(1)
                setCount(0)
            } else {
                setPlayer2(neg)
                setTurn(0)
                setCount(0)
            }
        }
    }, [player1, player2, doubleTriple]);

    return (
            <div className={"kingdiv"}>
                <div id={"legsdiv"}>
                    <text>{legsp1}</text>
                    <text>{legsp2}</text>
                </div>
                <div id={"scores"}>
                    <text id={"p1"}>{player1}</text>
                    <text id={"p2"}>{player2}</text>
                </div>
                <div id={"dtbtn"}>
                    <button id={"dbtn"} onClick={() => setDoubletriple(2)}>Double</button>
                    <button id={"tbtn"} onClick={() => setDoubletriple(3)}>Triple</button>
                </div>
                <div id={"center"}>
                    <div id={"CalBTN"}>
                        {calcButtons.map((value, index) => (
                            <button key={index}
                                    onClick={() => onClick(index + 1)}>{index + 1}</button>))}
                    </div>
                    <div id={"div25"}>
                        <button id={"btn25"} onClick={() => onClick(25)}>25</button>
                    </div>
                    <div id={"wtext"}>
                        <p>{winnertext}</p>
                    </div>
                    <div id={"erneutbtn"}>
                        <button type={"submit"}
                                onClick={Handleerneutsp}
                                hidden={winnertext === "Spieler 1 hat gewonnen" || winnertext === "Spieler 2 hat gewonnen" ? false : true}>erneut spielen?
                        </button>
                    </div>
                </div>
            </div>
    )
}



















