import React from "react";
import './css/QuizPage.css'
import Database from '../db/db.json'
import Navbar from './components/Navbar'
import TitleBar from "./components/TitleBar";
import Footer from "./components/Footer";
import Score from "./components/Score"
import DialogBox from "./components/DialogBox";

class ScorePage extends React.Component{
    constructor(props){
        super(props)
        this.authorization()
    }
    authorization(){
        if (window.sessionStorage.getItem("login") == null) {
            window.location = "//"+ window.location.host + "/login"
        }
    }
    nonThanks(){
        document.getElementsByClassName("dialog-container")[1].style.display = "none"
    }
    render(){
        
        return(
            <div>
                <Navbar />
                <DialogBox
                    title="Perhatian!"
                    text="Tidak dapat mendapatkan hadiah, nilai terlalu rendah. Ulangi quiz kembali."
                    firstbutton="Batal"
                    secondbutton = "Batal"
                    firstCommand = {this.nonThanks}
                    secondCommand = {this.nonThanks}
                />
                <Score datas={Database}/>
                <Footer />
            </div>
        )
    }
}

export default ScorePage;