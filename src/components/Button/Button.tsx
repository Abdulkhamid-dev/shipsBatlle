import React, { Component } from "react";
import { StyledButton } from "./Button.style";

type BtnProps = {
  btnLabel: string;
  btnClck: () => void;
  btnDis: boolean;
};
export default class CustomButton extends Component<BtnProps> {
  constructor(props: BtnProps) {
    super(props);
  }
  render() {
    return (
      <StyledButton onClick={this.props.btnClck} disabled={this.props.btnDis}>
        {this.props.btnLabel}
      </StyledButton>
    );
  }
}
