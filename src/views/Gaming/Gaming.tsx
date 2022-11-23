import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { Dispatch } from "redux";
import { ICoordinates } from "../../redux/stage/stage";
import Squart from "../../components/Squart/Squart";
import { StyledGaming } from "./Gaming.style";

export class Gaming extends Component<any> {
  render() {
    console.log(this.props.coordinates);

    return (
      <StyledGaming>
        <div className="squart_wrap">
          {this.props.coordinates.map((item: ICoordinates, index: number) => (
            <Squart key={index} callBack={() => console.log("some")} />
          ))}
        </div>
      </StyledGaming>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  coordinates: state.game.firstPlayer.coordinates,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Gaming);
