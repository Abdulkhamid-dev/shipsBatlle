import { Component } from "react";
import CustomButton from "../../components/Button/Button";
import { RootState } from "../../redux/store";
import { connect } from "react-redux";
import { updateGame } from "../../redux/stage/stage";
import { Dispatch } from "redux";
import { StyledStart } from "./Start.style";

class Start extends Component<any> {
  render() {
    return (
      <StyledStart>
        <h1>WELCOM TO SHIPS BATTLE!</h1>

        <CustomButton
          btnDis={false}
          btnLabel="Start game"
          btnClck={() =>
            this.props.start({ gameStage: "setting", currentPlayer: 1 })
          }
        />
      </StyledStart>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  cycle: state.game.gameStage,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    start: (arg: any) => dispatch(updateGame(arg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
