import React from "react";
import "./DialogBox.css"
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/esm/Button";

class DialogBox extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="dialog-container" style={{display:"none"}}>
                <div id="dialog-title">
                    <h1>{this.props.title}</h1>
                </div>
                <div id="dialog-text">
                    <p>{this.props.text}</p>
                </div>
               
                <div id="dialog-button2" onClick={this.props.secondCommand}>{this.props.secondbutton}</div>
                <div id="dialog-button1" onClick={this.props.firstCommand}>{this.props.firstbutton}</div>
            </div>
        )
    }
}

export default DialogBox;