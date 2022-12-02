/* eslint-disable react-hooks/rules-of-hooks */
import React, { Component } from "react";
import "./App.css";
import "antd/dist/reset.css";
import { useAppSelector } from "./redux/hooks";
import { StyledStart } from "./styles/index";
import Start from "./views/Start/Start";
import { connect } from "react-redux";
import { IGameState } from "./redux/stage/stage";
import { RootState } from "./redux/store";
import Gaming from "./views/Gaming/Gaming";
import SetShips from "./views/SetShips/SetShips";

interface AppComp {
  cycle: string;
}
class App extends Component<AppComp> {
  constructor(props: AppComp) {
    super(props);
    this.state = {
      cycle: "",
    };
  }
  render() {
    console.log(this.props.cycle);
    this.componentDidMount = () => {
      this.setState({ cycle: this.props.cycle });
    };
    return (
      <StyledStart>
        <div>
          <video autoPlay muted loop className="myVideo">
            <source
              src={require("./assets/video/ships-video.mp4")}
              type="video/mp4"
            />
          </video>
          {this.props.cycle === "start" ? (
            <Start />
          ) : this.props.cycle === "pending" ? (
            <Gaming />
          ) : this.props.cycle === "setting" ? (
            <SetShips />
          ) : (
            <h1>End</h1>
          )}
        </div>
      </StyledStart>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  cycle: state.game.gameStage,
});

export default connect(mapStateToProps)(App);
