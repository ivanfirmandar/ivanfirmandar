import React from "react";
import Database from '../db/db.json'
import Navbar from './components/Navbar'
import "./css/Gift.css"
import TitleBar from "./components/TitleBar";
import Footer from "./components/Footer";
import gift from "../img/gift.png"

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
                {/* <Navbar /> */}
                <div id="image-container">
                    <img src={gift}></img>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ScorePage;