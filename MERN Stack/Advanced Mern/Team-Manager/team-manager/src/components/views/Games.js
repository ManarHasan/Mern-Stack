import axios from 'axios';
import React, { useState } from 'react'

const Games = props => {
    const [counter, setCounter] = useState(0);
    const [color_1, setColor1] = useState(false);
    const [color_2, setColor2] = useState(false);
    const [color_3, setColor3] = useState(true);

    const gameHandler = (i) => {
        setCounter(i);
    }
    
    const statusHandler = (str, id, str2) => {
        if(str === "playing"){
            axios.put("http://localhost:8000/api/player" +id, {
                counter: counter,
                status: "playing"
            })
        }
        else if(str === "not playing"){
            axios.put("http://localhost:8000/api/player" +id, {
                counter: counter,
                status: "not playing"
            })
        } else {
            axios.put("http://localhost:8000/api/player" +id, {
                counter: counter,
                status: "undecided"
            })
        }
        if(str2 === "col1"){
            setColor1(true);
            setColor2(false);
            setColor3(false);
        }
        else if(str2 === "col2"){
            setColor2(true);
            setColor1(false);
            setColor3(false);
        } else {
            setColor3(true);
            setColor1(false);
            setColor2(false);
        }
    }

    return (
        <>
        <h1>Player Status {props.players[0].games[counter].name.default}:</h1>
        <div><span onClick={(e) => gameHandler(0)}>Game 1</span> <span onClick={(e) => gameHandler(1)}>Game 2</span> <span onClick={(e) => gameHandler(2)}>Game 3</span></div>
        <table>
            <thead>
                <tr>
                <th>Player Name:</th>
                <th>Actions:</th>
                </tr>
            </thead>
            <tbody>
            {props.players.map((player, i) => {
                return (
                    <tr>
                    <td>{player.firstName} {player.lastName}</td>
                    <td><button style={{padding: "5px 10px", backgroundColor: color_1 ? "green" : ""}} onClick={(e) => statusHandler("playing", player._id, "col1")}>Playing</button> <button style={{padding: "5px 10px", backgroundColor: color_2 ? "red" : ""}} onClick={(e) => statusHandler("not playing", player._id, "col2")}>Not Playing</button> <button style={{padding: "5px 10px", backgroundColor: color_3 ? "yellow" : ""}} onClick={(e) => statusHandler("undecided", player._id, "col3")} >Undecided</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
        </>
    )
}

export default Games
