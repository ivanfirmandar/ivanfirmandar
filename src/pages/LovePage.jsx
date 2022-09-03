import React from "react";
import './css/QuizPage.css'
import Database from '../db/db.json'
import Navbar from './components/Navbar'
import TitleBar from "./components/TitleBar";
import Footer from "./components/Footer";
import "./css/LovePage.css"
import Score from "./components/Score"
import DialogBox from "./components/DialogBox";

class LovePage extends React.Component{
    constructor(props){
        super(props)
        this.authorization()
    }
    authorization(){
        if (window.sessionStorage.getItem("login") == null) {
            window.location = "//"+ window.location.host + "/login"
        }
    }
    sayLove(){
        let num = document.getElementsByClassName("form-input")[0].value;
        console.log(num)
        let str = " banyak"
        document.getElementById("masIVan").innerHTML = `Mas Ivan Sayang dek Adin ${str.repeat(parseInt(num))}`
    }
    render(){
        
        return(
            <div>
                <Navbar />
                <div id="love-form">
                    <form action="">
                        <input type="text" className="form-input"  placeholder="dek Adin mau mas Ivan sayang berapa kali?" onChange={this.sayLove}></input>
                        <p>contoh: 10</p>
                        <div id="love-button">Generate</div>
                    </form>
                </div>
                <div id="lovepage" >
                    <h1 id="masIVan"></h1>
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default LovePage;