import React from "react";
import "./Quiz.css"
import DialogBox from "./DialogBox.jsx"
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";

class Quiz extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            page : 0,
            used_data : {},
            datas : props.data.datas
        }
        if(window.sessionStorage.getItem("answer") == "" || window.sessionStorage.getItem("answer") == null){
            let arrayDatas = []
            for (let index = 0; index < this.state.datas.length; index++) {
                arrayDatas.push("")
            }
            window.sessionStorage.setItem("answer","+" + arrayDatas.join("+"))
        }
    }
    
    saveAnswer(e){
        e.target.checked = true
        let answer = window.sessionStorage.getItem("answer").split("+")
        answer[this.state.page+1] = e.target.value
        window.sessionStorage.setItem("answer",answer.join("+"))
        console.log(window.sessionStorage.getItem("answer"))
    }
    nextPage(e){
        if(this.state.page+1 == this.state.datas.length){
        document.getElementsByClassName("dialog-container")[1].style.display = ""
        }
        if(this.state.page == this.state.datas.length -1 ){
            return
        }
       this.setState(
        {page: this.state.page + 1}
       )
    }
    prevPage(e){
        if(this.state.page == 0){
            return
        }
        this.setState({
            page:this.state.page - 1
        })

    }
    changePage(e){
        this.setState({
            page: parseInt(e.target.textContent) -1
        })
    }
    render(){
        let index = 0
        let pageNow = 0
        let answer = window.sessionStorage.getItem("answer").split("+")
        console.log(answer)
        console.log(answer)
        let empty_index = answer.indexOf("")
        return(
            <div id="quiz-container">
                <div id="quiz-number"><h1>{this.state.page + 1}</h1></div>
                <div id="quiz-question"><p>{this.state.datas[this.state.page].question}</p></div>
                <div id="quiz-answer">
                    {this.state.datas[this.state.page].option.map(e=>{
                        index++
                        let id = "answer-"+ index
                        let checkedID;
                        if(answer[this.state.page+1] == e){
                            console.log(e)
                            return(
                                <div className="answer-option">
                                <input type="radio" value={e} name="answer" id={id} checked={true} onFocus={this.saveAnswer.bind(this)}/>
                                <label for={id}>{e}</label>
                            </div>
                            )
                        }else{
                            return(
                                <div className="answer-option">
                                <input type="radio" value={e} name="answer" id={id} onFocus={this.saveAnswer.bind(this)} checked={false}/>
                                <label for={id}>{e}</label>
                            </div>
                            )
                        }
                    })
                    }
                </div>
                <div id="quiz-next">
                    
                     <div id="prev-button" onClick={this.prevPage.bind(this)}>Previous</div>
                    <div id="next-button" onClick={this.nextPage.bind(this)}>{this.state.datas.length == this.state.page+1 ? "Submit":"Next"}</div>
                </div>
                <div id="quiz-list">
                    {this.state.datas.map(e=>{
                        pageNow++
                        if(answer[pageNow] != "" && pageNow!=this.state.page+1){
                            return(
                                <div className="list" style={{backgroundColor : "orange", color:"darkslategray"}} onClick={this.changePage.bind(this)}><p>{pageNow}</p>
                                </div>)
                        }
                        if(pageNow==this.state.page+1){
                            return(
                                <div className="list" style={{backgroundColor : "white", color:"darkslategray"}} onClick={this.changePage.bind(this)}><p>{pageNow}</p>
                                </div>
                            )
                        }else{
                            return(
                                <div className="list" onClick={this.changePage.bind(this)}><p>{pageNow}</p>
                                </div>
                            )
                        }
                       
                    })}
                   
                </div>
            </div>
        )
    }
}

export default Quiz;