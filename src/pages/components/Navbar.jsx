import React from "react";
import "./Navbar.css"
import LogoutLogo from "../../img/logout.svg"
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";
import Logo from '../../img/logoduck.png'
import DialogBox from "./DialogBox";

class NavBar extends React.Component{
    constructor(props){
        super(props)

    }
    showCommand(){
        document.getElementsByClassName("dialog-container")[0].style.display = ""
    }
    nonThanks(e){
        document.getElementsByClassName("dialog-container")[0].style.display = "none"
    }
    yesThanks(e){
        window.sessionStorage.removeItem("answer")
        window.sessionStorage.removeItem("login")
        window.location = "//"+ window.location.host + "/login"
    }
    render(){
        return(
            <div id="nav-container">
                <div className="nav-content">
                    <img id="logo" src={Logo}></img>
                    <div id="nav-title">adin.com</div>
                    <div id="logOut-button" onClick={this.showCommand}>
                        <img src={LogoutLogo} alt="" />
                        <p>LogOut</p>
                    </div>
                </div>
                <DialogBox 
                    title="Perhatian!"
                    text="Apakah Anda serius ingin Logout?"
                    firstbutton="Batal"
                    secondbutton = "Serius"
                    firstCommand = {this.nonThanks}
                    secondCommand = {this.yesThanks}
                />
            </div>
        )
    }
}

export default NavBar;