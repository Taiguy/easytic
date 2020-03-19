import React from 'react';
import './App.css';
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: ['?','?','?','?','?','?','?','?','?'],
            message: "X's Turn"
        }
        this.counter = 0;
    }
    render() {
        return (
            <div>
                <h1 id="title">Tic-Tac-Toe</h1>
                <div id="board">
                    {this.state.board.map((value,i) => {return (
                        <div className="cell" onClick={() => this.handleClick(i)}>
                            <h2>{this.state.board[i]}</h2>
                        </div>
                    );})}
                </div>
                <h1 id="message">{this.state.message}</h1>
                <button id="resetButton" onClick={() => this.reset()}>RESET</button>
            </div>
        );
    }

    handleClick(i){
        let board = this.state.board;
        if(this.state.board[i] === '?'){
            if(this.counter % 2 === 0){
                board[i] = "X";
                this.setState({message: "O's Turn"});
                this.counter++;
            }else if(this.counter % 2 === 1){
                board[i] = "O";
                this.setState({message: "X's Turn"});
                this.counter++;
            }
            this.setState({board:board});
            if(this.checkWin()){
                this.counter = 0.5;
            }
        }
    }

    checkWin(){
        if(
            this.state.board[0]+this.state.board[1]+this.state.board[2] === "XXX" ||
            this.state.board[3]+this.state.board[4]+this.state.board[5] === "XXX" ||
            this.state.board[6]+this.state.board[7]+this.state.board[8] === "XXX" ||
            this.state.board[0]+this.state.board[3]+this.state.board[6] === "XXX" ||
            this.state.board[1]+this.state.board[4]+this.state.board[7] === "XXX" ||
            this.state.board[2]+this.state.board[5]+this.state.board[8] === "XXX" ||
            this.state.board[0]+this.state.board[4]+this.state.board[8] === "XXX" ||
            this.state.board[2]+this.state.board[4]+this.state.board[6] === "XXX"){
                this.setState({message: "X Wins"});
                return true;
        }else if(
            this.state.board[0]+this.state.board[1]+this.state.board[2] === "OOO" ||
            this.state.board[3]+this.state.board[4]+this.state.board[5] === "OOO" ||
            this.state.board[6]+this.state.board[7]+this.state.board[8] === "OOO" ||
            this.state.board[0]+this.state.board[3]+this.state.board[6] === "OOO" ||
            this.state.board[1]+this.state.board[4]+this.state.board[7] === "OOO" ||
            this.state.board[2]+this.state.board[5]+this.state.board[8] === "OOO" ||
            this.state.board[0]+this.state.board[4]+this.state.board[8] === "OOO" ||
            this.state.board[2]+this.state.board[4]+this.state.board[6] === "OOO") {
                this.setState({message: "O Wins"});
                return true;
        }else if(this.counter > 8){
            this.setState({message: "It's a Tie"});
            return true;
        }else{
            return false;
        }

    }

    reset(){
        this.setState({board:['?','?','?','?','?','?','?','?','?']});
        this.counter = 0;
        this.setState({message: "X's Turn"});
    }
}
