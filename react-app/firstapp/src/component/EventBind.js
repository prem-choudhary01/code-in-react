import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massage: "Hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       massage: "Goodbye!!!",
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      massage: "Goodbye !!!!!!!",
    });
  };
  render() {
    return (
      <div>
        <div> {this.state.massage}</div>

        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={() => this.clickHandler()}> click</button> */}
        <button onClick={this.clickHandler}> click</button>
      </div>
    );
  }
}

export default EventBind;
