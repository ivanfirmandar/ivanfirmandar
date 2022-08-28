import React from "react";
import './css/QuizPage.css'
import Database from '../db/db.json'
import DialogBox from "./components/DialogBox";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TitleBar from "./components/TitleBar";
import Quiz from "./components/Quiz"

class QuizPage extends React.Component{
    constructor(props){
        super(props)
        this.authorization()
    }
    authorization(){
        if (window.sessionStorage.getItem("login") == null) {
            window.location = "//"+ window.location.host + "/login"
        }
    }   
    nonThanks(e){
        document.getElementsByClassName("dialog-container")[1].style.display = "none"
    }
    yesThanks(e){
        window.location = "./quiz/score"
    }
    authenticate(datas){
        if(window.sessionStorage.getItem("login") == null){
            window.location = "login"
        }
    }
    render(){
        return(
            <div>
                <Navbar />
                <DialogBox
                    title="Perhatian!"
                    text="Apakah Anda yakin ingin menyelesaikan kuis ini?"
                    firstbutton="Batal"
                    secondbutton = "Submit"
                    firstCommand = {this.nonThanks}
                    secondCommand = {this.yesThanks}
                />
                <Quiz data={Database}/>
                <Footer />
            </div>
        )
    }
}

export default QuizPage;