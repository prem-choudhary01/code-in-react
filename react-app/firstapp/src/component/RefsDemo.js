import React, { Component } from "react";

export class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cdRef = null;
    this.setCdRef = (element) => {
      this.cdRef = element;
    };
  }
  componentDidMount() {
    if (this.cdRef) {
      this.cdRef.focus();
    }

    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCdRef} />
        <button onClick={this.clickHandler}>click me </button>
      </div>
    );
  }
}
