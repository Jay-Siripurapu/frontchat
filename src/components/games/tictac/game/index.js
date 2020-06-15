import React, { useState } from 'react'
import Board from '../board'
import { calculateWinner } from './winner';
import queryString from "query-string";
import './style.css'


function Game() {
    
    // const {name,room}=queryString.parse(location.search);
    
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0) 
    const [isXNext, setIsXNext] = useState(true) 
    const winner = calculateWinner(history[stepNumber]) 

    function handleClick(i) {
        const timeInHistory = history.slice(0, stepNumber + 1) 
        const current = timeInHistory[stepNumber] 
        const squares = [...current] 

        if (winner || squares[i]) return; 

        squares[i] = isXNext ? 'X' : 'O'; 
        setHistory([...timeInHistory, squares]) 
        setStepNumber(timeInHistory.length) 
        setIsXNext(!isXNext)
    }

    const jumpTo = step => {
        
        setStepNumber(step)
        setIsXNext(step % 2 === 0)
    }

    const renderMoves = () => (
       
        history.map((_step, move) => {
            const destination = move ? `Move ${move}` : "Reset"
            return (
                <li className='listButtons' key={move}>
                    <button className='buttons' onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    )
    const resetall = () => {
        
    }
    

    return (
        <div>
            
            <div className="player">
                <p>{winner ? 'Winner: ' + winner : 'Your Turn: ' + (isXNext ? 'X' : 'O')}</p>
                <br></br>
               
            </div>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className="moves">
                {renderMoves()}
            </div>
        </div>
    )

}

export default Game;