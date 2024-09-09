import React from "react";

class Kaypad extends React.Component {
  handleClick = (value) => {
    this.props.onClick(value);
  };

  render() {
    return (
      <div className="keypad">
        {/* keypad buttons */}
        <button onClick={() => this.handleClick(1)}>1</button>
        <button onClick={() => this.handleClick(2)}>2</button>
        <button onClick={() => this.handleClick(3)}>3</button>
        <button onClick={() => this.handleClick(4)}>4</button>
        <br />
        <button onClick={() => this.handleClick(5)}>5</button>
        <button onClick={() => this.handleClick(6)}>6</button>
        <button onClick={() => this.handleClick(7)}>7</button>
        <button onClick={() => this.handleClick(8)}>8</button>
        <br />
        <button onClick={() => this.handleClick(9)}>9</button>
        <button onClick={() => this.handleClick(0)}>0</button>
        <button onClick={() => this.handleClick(0)}>-</button>
        <button onClick={() => this.handleClick(0)}>*</button>
        <br />
        <button onClick={() => this.handleClick(0)}>/</button>
        <button onClick={() => this.handleClick(9)}>=</button>
        <button onClick={() => this.handleClick(9)}>c</button>
        <button onClick={() => this.handleClick(9)}>+</button>

        {/* and so on */}
      </div>
    );
  }
}

export default Kaypad;
