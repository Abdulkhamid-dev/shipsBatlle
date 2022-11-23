import { Component } from "react";
import Button from "../components/Button/Button";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { startGame } from "../redux/stage/stage";
import { Dispatch } from "redux";

class Start extends Component<any> {
  render() {
    return (
      <>
        <h1>WELCOM TO SHIPS BATTLE!</h1>

        <Button
          btnLabel="Start game"
          btnClck={() => this.props.start()}
        />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  cycle: state.game.gameStage,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    start: () => dispatch(startGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
