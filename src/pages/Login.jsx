import React from "react";
import LoginDatas from "../db/login.json"
import Logo from "../img/logoduck.png"
import "./css/Login.css"
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

class Login extends React.Component{
    authLogin(){
        let myLogin = document.getElementsByClassName("form-input")
        for (let index = 0; index < LoginDatas.account.length; index++) {
            console.log(myLogin[0].value)
            console.log(LoginDatas.account[index])
            if (LoginDatas.account[index].id == myLogin[0].value && LoginDatas.account[index].pass == myLogin[1].value) {
                window.sessionStorage.setItem("login",LoginDatas.account[index].id)
                window.location = "quiz"
            }else{
               let loginInfo =  document.getElementById("login-info").innerHTML = "<p id='info-salah'>ID dan/atau Password Salah</p>"
               loginInfo.style.backgroundColor = "red"

            }
            
        }
    }
    render(){
        return(
            <div id="container">
                <NavBar />
                <div id="login-container">
                    <div id="login-design">

                    </div>
                    <div id="login-logo">
                        <img src={Logo} ></img>
                    </div>
                    <div id="login-title">
                        <p>Login Dulu!</p>
                    </div>
                    <div id="login-form">
                        <form action="">
                            <input type="text" className="form-input"  placeholder="ID"></input>
                            <p>hint: dek Adin</p>
                            <input type="password" className="form-input" placeholder="Password">
                            </input>
                            <p id="login-info">hint: dek Adin</p>
                        </form>
                    </div>
                    <div id="login-button" onClick={this.authLogin}>
                        <p>Login</p>
                    </div>
                </div>
                <Footer />
                
            </div>
        )
    }
}

export default Login;