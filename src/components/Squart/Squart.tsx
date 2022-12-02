import React, { Component } from "react";
import { StyledSquart } from "./Squart.style";

type SquartProps = {
  callBack: Function;
  isHitted: boolean;
  isSelected: boolean;
  isRightHitted: boolean;
};
export class Squart extends Component<SquartProps> {
  constructor(props: SquartProps) {
    super(props);
    this.state = {};
  }
  render() {
    const { callBack, isHitted, isSelected, isRightHitted } = this.props;
    return (
      <StyledSquart
        bgColor={
          isRightHitted
            ? "green"
            : isHitted
            ? "red"
            : isSelected
            ? "grey"
            : "#fff"
        }
        onClick={() => callBack()}
      ></StyledSquart>
    );
  }
}

export default Squart;
