import React, { Component } from "react";
import { LifecycleB } from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "prem",
    };
    console.log("LifecycleA Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" LifecycleA getDerivedStateFromProps");

    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");

    return(
        <div>
            <div>LifecycleA</div>   
            <LifecycleB/>

        </div>
    )

  }
}
