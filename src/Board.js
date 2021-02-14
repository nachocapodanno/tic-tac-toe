import Square from "./Square";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const Board = () => {

    //setting board initial values
    const [squareValues, setValuesSquare] = useState(Array(9).fill(null));
    const [turnX, setTurn] = useState(true);
    const [isWinner, setIsWinner] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];

          lines.forEach(element => {
              const [a,b,c] = element;
              if (squareValues[a] && (squareValues[a] === squareValues[b]) && (squareValues[a] === squareValues[c])) {
                setIsWinner(true);
                setIsFinished(true);
            }
          });
    });

    const setValue = pos => {
        const newSquareValues = [...squareValues];
        newSquareValues[pos] = turnX ? 'X' : 'O';
        setValuesSquare(newSquareValues);
        setTurn(!turnX);
    }

    const renderSquare = pos => {
        return <Square onClick={() => setValue(pos)} value={squareValues[pos]}/>
    }

    const restartGame = () => {
        setValuesSquare(Array(9).fill(null));
        setIsWinner(false);
        setTurn(true);
        setIsFinished(false);
    }

    return (
        <div>
            {!isWinner && <h1>Playing {turnX ? 'X' : 'O'}</h1>}
            {isWinner && <h1 style={{color: 'red'}}>Winner {!turnX ? 'X' : 'O'}</h1>}
            <div style={isWinner ? {display: 'flex', justifyContent: 'center', pointerEvents: "none", opacity: "0.4"} : {display: 'flex', justifyContent: 'center'}}>
                <div>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div style={{marginTop: '15px'}} >
            {isFinished && <Button onClick={() => restartGame()} variant="contained" color="secondary" component="span">
                Restart
            </Button>}
            </div>
        </div>
    );
}

export default Board