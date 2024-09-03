import React, { Component } from "react";
import { FRInput } from "./frinput";
export class Frprarentinput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  clickHandler = () => {
    this.inputRef.current.focus(); 
  };
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}
