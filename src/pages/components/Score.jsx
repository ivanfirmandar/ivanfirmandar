import React from "react";
import "./Score.css"
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";

class Score extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            kkm : 80
        }
    let keyAnswer = []
    for (let index = 0; index < props.datas.datas.length; index++) {
        keyAnswer.push(props.datas.datas[index].answer)
    }
    let myAnswer = window.sessionStorage.getItem("answer")
    myAnswer = myAnswer.split("+")
    if (myAnswer != props.datas.datas.length) {
        myAnswer.shift()
    }
    console.log(myAnswer)
    console.log(keyAnswer)
    this.state.score  = this.giveScore(myAnswer,keyAnswer)
    }
    giveScore(answer, key){
        let score = 0
        for (let index = 0; index < answer.length; index++) {
            if (answer[index] == key[index]) {
                score += 1
            }
        }
        return score/key.length *100
    }
    goToQuiz(){
        window.sessionStorage.setItem("answer","")
        window.location = "../quiz"
    }
    render(){
        console.log(this.state.score)
        console.log(this.state.kkm)
        return(
            <div id="score-container">
                <div id="score-design">
                </div>
                <div id="score-congrat">
                    {this.state.score >= this.state.kkm ? "Selamat!" : "Aw, Kamu seharusnya bisa lebih baik"}
                </div>
                <div id="score-identity">
                    <p>{this.state.score >= this.state.kkm ? `Selamat Anda telah melewati batas minimum kelulusan yaitu ${this.state.kkm}` : `Sayang sekali, Anda tidak dapat melewati batas minimum kelulusan yaitu ${this.state.kkm}`}</p> 
                    <p id="quotes">
                    “The score will take care of itself when you take care of the effort that precedes the score.” ~ John Wooden.
                    </p>
                    <div id="re-quiz" onClick={this.goToQuiz}>
                        Ulangi kuis
                    </div>
                </div>
                <div id="score-value">
                    {this.state.score}
                </div>
            </div>
        )
    }
}

export default Score;