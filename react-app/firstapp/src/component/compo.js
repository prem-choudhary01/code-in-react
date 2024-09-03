import React, { Component } from "react";

class Compo extends Component {
    clickHandler(){
        console.log("Button Clicked")
    }
    
  render() {

    return (
      <div>
        <button onClick={ this.clickHandler}>click me </button>
      </div>
    );
  }
}

export default Compo;
