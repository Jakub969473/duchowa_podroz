'use client';

import { useEffect, useState } from 'react';
import Test from "@/app/ui/background";


const TicTacToe = () => {
    const [origBoard, setOrigBoard] = useState([]);
    const [cells, setCells] = useState([]);

    useEffect(() => {
        const newBoard = Array.from(Array(9).keys());
        setOrigBoard(newBoard);
        setCells(document.querySelectorAll('.cell'));
    }, []);

    const startGame = () => {
        document.querySelector(".endgame").style.display = "none";
        origBoard.forEach((cell, index) => {
            cells[index].innerText = '';
            cells[index].style.removeProperty('background-color');
            cells[index].addEventListener('click', () => turnClick(index), false);
        });
    };

    const turnClick = (squareId) => {
        if (typeof origBoard[squareId] == 'number') {
            turn(squareId, 'O');
            if (!checkWin(origBoard, 'O') && !checkTie()) turn(bestSpot(), 'X');
        }
    };

    const turn = (squareId, player) => {
        origBoard[squareId] = player;
        document.getElementById(squareId).innerText = player;
        let gameWon = checkWin(origBoard, player);
        if (gameWon) gameOver(gameWon);
    };

    const checkWin = (board, player) => {
        let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
        let gameWon = null;
        for (let [index, win] of winCombos.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = { index: index, player: player };
                break;
            }
        }
        return gameWon;
    };

    const gameOver = (gameWon) => {
        for (let index of winCombos[gameWon.index]) {
            document.getElementById(index).style.backgroundColor =
                gameWon.player === 'O' ? "blue" : "red";
        }
        cells.forEach((cell) => cell.removeEventListener('click', () => turnClick(cell), false));
        declareWinner(gameWon.player === 'O' ? "You win!" : "You lose.");
    };

    const declareWinner = (who) => {
        document.querySelector(".endgame").style.display = "block";
        document.querySelector(".endgame .text").innerText = who;
    };

    const emptySquares = () => {
        return origBoard.filter((s) => typeof s == 'number');
    };

    const bestSpot = () => {
        return minimax(origBoard, 'X').index;
    };

    const checkTie = () => {
        if (emptySquares().length === 0) {
            cells.forEach((cell) => {
                cell.style.backgroundColor = "yellow";
                cell.removeEventListener('click', () => turnClick(cell), false);
            });
            declareWinner("Tie Game!");
            return true;
        }
        return false;
    };

    const minimax = (newBoard, player) => {
        var availSpots = emptySquares();

        if (checkWin(newBoard, 'O')) {
            return { score: -10 };
        } else if (checkWin(newBoard, 'X')) {
            return { score: 10 };
        } else if (availSpots.length === 0) {
            return { score: 0 };
        }
        var moves = [];
        for (var i = 0; i < availSpots.length; i++) {
            var move = {};
            move.index = newBoard[availSpots[i]];
            newBoard[availSpots[i]] = player;

            if (player === 'X') {
                var result = minimax(newBoard, 'O');
                move.score = result.score;
            } else {
                var result = minimax(newBoard, 'X');
                move.score = result.score;
            }

            newBoard[availSpots[i]] = move.index;

            moves.push(move);
        }

        var bestMove;
        if (player === 'X') {
            var bestScore = -10000;
            for (var i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            var bestScore = 10000;
            for (var i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        return moves[bestMove];
    };

    return (

        <div className=".bg-no-repeat ">
            <>

                <div className="row">
                    <center>Can the AI beat you?</center>
                </div>
                <br/>
                <table>
                    <tbody>
                    <tr>
                        <td className="cell" id="0"></td>
                        <td className="cell" id="1"></td>
                        <td className="cell" id="2"></td>
                    </tr>
                    <tr>
                        <td className="cell" id="3"></td>
                        <td className="cell" id="4"></td>
                        <td className="cell" id="5"></td>
                    </tr>
                    <tr>
                        <td className="cell" id="6"></td>
                        <td className="cell" id="7"></td>
                        <td className="cell" id="8"></td>
                    </tr>
                    </tbody>
                </table>
                <br />
                <div className="endgame">
                    <div className="text"></div>
                    <button onClick={startGame}>Restart</button>
                </div>
            </>
        </div>
    );
};

export default TicTacToe;
