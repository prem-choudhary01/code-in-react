import React from "react";

export const UpdatedComponent = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((pervState) => {
        return { count: pervState.count + incrementNumber };
      });
    };
    render() {
      console.log(this.props.name);
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }

  return NewComponent;
};
