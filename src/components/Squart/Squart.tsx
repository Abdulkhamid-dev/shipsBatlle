import React, { Component } from "react";
import { StyledSquart } from "./Squart.style";

type SquartProps = {
  callBack: Function;
};
export class Squart extends Component<SquartProps> {
  render() {
    const {callBack} = this.props
    return (
      <StyledSquart onClick={() => callBack()}></StyledSquart>
    );
  }
}

export default Squart;
