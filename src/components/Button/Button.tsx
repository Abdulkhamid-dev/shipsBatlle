import React, { Component } from "react";

type BtnProps = {
  btnLabel: string;
  btnClck: any;
};
export default class Button extends Component<BtnProps> {
  constructor(props: BtnProps) {
    super(props);
  }
  render() {
    return <button onClick={this.props.btnClck}>{this.props.btnLabel}</button>;
  }
}
