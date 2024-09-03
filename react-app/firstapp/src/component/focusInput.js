 import React, { Component } from "react";
import { Input } from "./input";

     export class FocusInput extends Component{
        constructor(props){
            super(props)
            this.componentRef = React.createRef()
        }
        clickHandler = () => {
            this.componentRef.current.FocusInput()
        }
        render(){
            return(
             <div>
                  <Input ref={this.componentRef}/>
                  <button onClick={this.clickHandler}> focus Input</button>
             </div>
            )
        }
     }