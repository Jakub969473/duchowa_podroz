import { useEffect, useState } from 'react';
import { GameBoard, WinCombo } from './types';

const huPlayer = 'O';
const aiPlayer = 'X';
let tura = 1
let counter = 0
const winCombos: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

const TicTacToe: React.FC = () => {
    const [origBoard, setOrigBoard] = useState<GameBoard>({});
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [winner, setWinner] = useState<string | null>(null);

    useEffect(() => {
        startGame();
    }, []);

    const startGame = () => {
        setOrigBoard(Array.from(Array(9).keys()));
        setGameOver(false);
        setWinner(null);
        console.log(counter)
        if(counter === 20){
            window.location.replace("/nagroda");
        }else{
            counter++;
        }
    };

    const turnClick = (square: number) => {

        if (!gameOver && typeof origBoard[square] === 'number') {

            turn(square, huPlayer);

            origBoard[square] = 'O'

            setTimeout(() => {
                const aiMove = bestSpot();
                if (typeof origBoard[aiMove] === 'number') {
                    turn(aiMove, aiPlayer);
                }
                // Re-enable player clicks after AI turn
            }, 500);

            if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);

        }


        /*
        if(square === null){
            square = 1
        }
        if (!gameOver && typeof origBoard[square] === 'number') {

            if (tura === 1){
                turn(square, huPlayer);
                tura = 0
                console.log(tura)
                turnClick()
            }else{
                if (!checkWin(origBoard, huPlayer) && !checkTie()) {
                    // AI makes a move after a short delay
                    setTimeout(() => {
                        const aiMove = bestSpot();
                        if (typeof origBoard[aiMove] === 'number') {
                            turn(aiMove, aiPlayer);
                        }
                        // Re-enable player clicks after AI turn
                    }, 500);
                }
                tura = 1
                console.log(tura)
            }


            // Check for player win or tie
        }

         */

    };




    const turn = (squareId: number, player: string) => {
        const newBoard = { ...origBoard };
        newBoard[squareId] = player;
        setOrigBoard(newBoard);
        const gameWon = checkWin(newBoard, player);
        if (gameWon) gameOverFunc(gameWon);
        const Tie = checkTie();
        if (Tie) gameOverFunc(gameWon);
    };

    const checkWin = (board: GameBoard, player: string): WinCombo | null => {
        const plays = Object.entries(board)
            .filter(([_, value]) => value === player)
            .map(([key]) => parseInt(key));

        let gameWon: WinCombo | null = null;
        for (const [index, win] of winCombos.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = { index, player };
                break;
            }
        }
        return gameWon;
    };

    const gameOverFunc = (gameWon: WinCombo) => {
        setGameOver(true);
        for (const index of winCombos[gameWon.index]) {
            // Set background color for winning squares
        }
        setWinner(gameWon.player === huPlayer ? 'You win!' : 'You lose.');
    };

    const emptySquares = () => {
        return Object.values(origBoard).filter(s => typeof s === 'number');
    };

    const bestSpot = (): number => {
        return minimax(origBoard, aiPlayer).index;
    };

    const checkTie = (): boolean => {
        if (emptySquares().length === 0) {
            setGameOver(true);
            declareWinner('Tie Game!');
            return true;
        }
        return false;
    };

    const declareWinner = (who: string) => {
        // Handle winner declaration
    };

    const minimax = (newBoard: GameBoard, player: string) => {
        const availSpots = emptySquares();

        if (checkWin(newBoard, huPlayer)) {
            return { score: -10 };
        } else if (checkWin(newBoard, aiPlayer)) {
            return { score: 10 };
        } else if (availSpots.length === 0) {
            return { score: 0 };
        }

        const moves = [];
        for (const spot of availSpots) {
            const move: any = {};
            move.index = newBoard[spot];
            newBoard[spot] = player;

            if (player === aiPlayer) {
                const result = minimax(newBoard, huPlayer);
                move.score = result.score;
            } else {
                const result = minimax(newBoard, aiPlayer);
                move.score = result.score;
            }

            newBoard[spot] = move.index;

            moves.push(move);
        }

        let bestMove;
        if (player === aiPlayer) {
            let bestScore = -Infinity;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        return moves[bestMove];
    };

    return (
        <div>
            <table>
                <tbody>
                {[0, 3, 6].map(row => (
                    <tr key={row}>
                        {[0, 1, 2].map(col => (
                            <td
                                key={row + col}
                                className="cell"
                                onClick={() => turnClick(row + col)}
                                id={String(row + col)}
                            >
                                {origBoard[row + col]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="endgame" style={{ display: gameOver ? 'block' : 'none' }}>
                <div className="text">{winner}</div>
                <button onClick={startGame}>Restart</button>
            </div>
        </div>
    );
};

export default TicTacToe;
