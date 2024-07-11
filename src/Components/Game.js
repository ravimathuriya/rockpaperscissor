import React, { Component } from 'react'
import "./Game.css"

export class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerval: null,
            computerval: null,
            playerscore: 0,
            computerscore: 0,
        }
    }

    logic = (playerval, computerval) => {
        if(playerval === computerval){
            return 0;
        }

        else if(
            (playerval === "ROCK" && computerval === "SCISSORS") ||
            (playerval === "SCISSORS" && computerval === "PAPER") ||
            (playerval === "PAPER" && computerval === "ROCK")
        )   
        {
            return 1;
        }

        else{
            return -1;
        }
    }

    decision = (playerchoice) => {
        const choices = ["ROCK" , "PAPER", "SCISSORS"]
        const computerchoice = choices[Math.floor(Math.random()*choices.length)]
        const val = this.logic(playerchoice, computerchoice)

        if(val === 1){
                this.setState({
                    playerval:playerchoice,
                    computerval:computerchoice,
                    playerscore:this.state.playerscore + 1
                })
        }

        else if (val === -1){
            this.setState({
                playerval:playerchoice,
                computerval:computerchoice,
                computerscore:this.state.computerscore + 1
            })
        }

        else
        {
            this.setState({
                playerval:playerchoice,
                computerval:computerchoice,
            })   
        }
    }

    render() {

        const {playerval, computerval, playerscore, computerscore} = this.state

        return (
            <div className='container'>
                <h1>Welcome to rock paper and scissor game.</h1>
                <div >
                    <button onClick={() => this.decision("ROCK")}>
                        <i className={`fas fa-hand-rock`} /> Rock
                    </button>
                    <button onClick={() => this.decision("PAPER")}>
                        <i className={`fas fa-hand-paper`} /> Paper
                    </button>
                    <button onClick={() => this.decision("SCISSORS")}>
                        <i className={`fas fa-hand-scissors`} />  Scissors
                    </button>
                </div>

                <div className="content">
                    <p>Your choice: {playerval} </p>
                    <p>Computer's choice: {computerval} </p>
                    <p>Your score: {playerscore} </p>
                    <p>Computer's score: {computerscore} </p>
                </div>
            </div>
        )
    }
}

export default Game
