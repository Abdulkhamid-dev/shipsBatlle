import { Button, Input, message } from "antd";
import { Component } from "react";
import { StyledShips } from "./SetShips.style";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/store";
import {
  ICoordinates,
  IPlayer,
  setCurrentPlayer,
  updateGame,
  updatePlayerScore,
} from "../../redux/stage/stage";
import Squart from "../../components/Squart/Squart";
import CustomButton from "../../components/Button/Button";

type CompState = {
  shipsCor: number[];
  player: IPlayer;
};
type CompProp = {
  currentPlayer: number;
  players: IPlayer[];
  saveShips: (arg: { players: IPlayer[] }) => void;
  updateGame: (arg: any) => void;
};
export class SetShips extends Component<CompProp, CompState> {
  constructor(props: CompProp) {
    super(props);
    this.state = {
      shipsCor: [],
      player: {
        id: 0,
        score: 0,
        coordinates: [
          {
            id: 1,
            isShip: false,
            isHitted: false,
          },
          {
            id: 2,
            isShip: false,
            isHitted: false,
          },
          {
            id: 3,
            isShip: false,
            isHitted: false,
          },
          {
            id: 4,
            isShip: false,
            isHitted: false,
          },
          {
            id: 5,
            isShip: false,
            isHitted: false,
          },
          {
            id: 6,
            isShip: false,
            isHitted: false,
          },
          {
            id: 7,
            isShip: false,
            isHitted: false,
          },
          {
            id: 8,
            isShip: false,
            isHitted: false,
          },
          {
            id: 9,
            isShip: false,
            isHitted: false,
          },
          {
            id: 10,
            isShip: false,
            isHitted: false,
          },
          {
            id: 11,
            isShip: false,
            isHitted: false,
          },
          {
            id: 12,
            isShip: false,
            isHitted: false,
          },
          {
            id: 13,
            isShip: false,
            isHitted: false,
          },
          {
            id: 14,
            isShip: false,
            isHitted: false,
          },
          {
            id: 15,
            isShip: false,
            isHitted: false,
          },
          {
            id: 16,
            isShip: false,
            isHitted: false,
          },
          {
            id: 17,
            isShip: false,
            isHitted: false,
          },
          {
            id: 18,
            isShip: false,
            isHitted: false,
          },
          {
            id: 19,
            isShip: false,
            isHitted: false,
          },
          {
            id: 20,
            isShip: false,
            isHitted: false,
          },
          {
            id: 21,
            isShip: false,
            isHitted: false,
          },
          {
            id: 22,
            isShip: false,
            isHitted: false,
          },
          {
            id: 23,
            isShip: false,
            isHitted: false,
          },
          {
            id: 24,
            isShip: false,
            isHitted: false,
          },
          {
            id: 25,
            isShip: false,
            isHitted: false,
          },
        ],
      },
    };
    this.handleShipsSelect = this.handleShipsSelect.bind(this);
    this.handleCheckPlayer = this.handleCheckPlayer.bind(this);
    this.hadleSubmit = this.hadleSubmit.bind(this);
  }

  handleShipsSelect(num: number) {
    if (this.state.shipsCor.includes(num)) {
      let filtered = this.state.shipsCor.filter((i) => i !== num);
      this.setState({ shipsCor: filtered });
    } else if (this.state.shipsCor.length > 7) {
      message.warning("You have only 8 points && Save your ships");
    } else {
      this.setState({ shipsCor: [...this.state.shipsCor, num] });
    }
  }
  handleCheckPlayer() {
    const playerCurr = this.props.players.find(
      (p: IPlayer) => p.id === this.props.currentPlayer
    );
    this.setState({ player: playerCurr as IPlayer });
  }

  hadleSubmit() {
    const { players } = this.props;
    if (this.state.shipsCor.length > 7) {
      if (this.props.currentPlayer === 1) {
        const playerSecondCopy = players[1];
        this.props.saveShips({
          players: [this.state.player, playerSecondCopy],
        });
        this.props.updateGame({ currentPlayer: 2 });
        this.setState({ shipsCor: [] });
      } else {
        const playerFirstCopy = players[0];
        this.props.saveShips({ players: [playerFirstCopy, this.state.player] });
        this.props.updateGame({ gameStage: "pending", currentPlayer: 1 });
        this.setState({ shipsCor: [] });
      }
    }
  }

  componentDidMount() {
    this.handleCheckPlayer();
  }
  componentDidUpdate(prevProp: CompProp, prevState: CompState) {
    if (prevState.shipsCor !== this.state.shipsCor) {
      const { player, shipsCor } = this.state;
      const result: ICoordinates[] = player.coordinates.map((i) => {
        if (shipsCor.includes(i.id)) {
          const { ...rest } = i;
          rest.isShip = true;
          return { ...rest };
        } else {
          return i;
        }
      });
      this.setState({
        player: { ...player, coordinates: result },
      });
    }
    if (prevProp.currentPlayer !== this.state.player.id) {
      this.handleCheckPlayer();
    }
  }

  render() {
    const { shipsCor, player } = this.state;
    const { currentPlayer, players } = this.props;
    return (
      <StyledShips>
        <h1>Set your ships Player {currentPlayer}</h1>
        <div className="squart_wrap">
          {player.coordinates.map((i) => (
            <Squart
              key={i.id}
              isRightHitted={false}
              callBack={() => this.handleShipsSelect(i.id)}
              isSelected={shipsCor.includes(i.id)}
              isHitted={i.isHitted}
            />
          ))}
        </div>
        <div className="btns">
          <CustomButton
            btnDis={false}
            btnLabel="Reset"
            btnClck={() => this.setState({ shipsCor: [] })}
          />
          <CustomButton
            btnDis={false}
            btnLabel="Save"
            btnClck={this.hadleSubmit}
          />
        </div>
      </StyledShips>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currentPlayer: state.game.currentPlayer,
  players: state.game.players,
});
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveShips: (arg: { players: IPlayer[] }) => dispatch(updateGame(arg)),
    updateGame: (arg: any) => dispatch(updateGame(arg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SetShips);
