import React from "react";
import './css/QuizPage.css'
import Database from '../db/db.json'
import Navbar from './components/Navbar'
import TitleBar from "./components/TitleBar";
import Footer from "./components/Footer";
import Score from "./components/Score"

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
    render(){
        
        return(
            <div>
                <Navbar />
                <Score datas={Database}/>
                <Footer />
            </div>
        )
    }
}

export default ScorePage;