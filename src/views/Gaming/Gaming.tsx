import { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/store";
import { Dispatch } from "redux";
import Swal from "sweetalert2";
import {
  ICoordinates,
  IPlayer,
  restartGame,
  updateGame,
} from "../../redux/stage/stage";
import { setCurrentPlayer } from "../../redux/stage/stage";
import Squart from "../../components/Squart/Squart";
import { StyledGaming } from "./Gaming.style";
import CustomButton from "../../components/Button/Button";
import { message } from "antd";

type ICompP = {
  players: IPlayer[];
  currentPlayer: number;
  saveShips: (arg: { players: IPlayer[] }) => void;
  updateGame: (arg: any) => void;
  restartGame: () => void;
};
type ICompS = {
  currCor: number;
  player: IPlayer;
  isWin: boolean;
};

export class Gaming extends Component<ICompP, ICompS> {
  constructor(props: ICompP) {
    super(props);
    this.state = {
      currCor: 0,
      isWin: false,
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
    this.handleCheckPlayer = this.handleCheckPlayer.bind(this);
    this.handleCheckIsHitted = this.handleCheckIsHitted.bind(this);
    this.handleCheckIsWin = this.handleCheckIsWin.bind(this);
    this.attackToShips = this.attackToShips.bind(this);
    this.selectShip = this.selectShip.bind(this);
  }
  selectShip(item: ICoordinates) {
    console.log(item);
    if (item.isHitted) {
      message.warning("This coordinate is already marked");
    } else {
      this.setState({ currCor: item.id });
    }
  }
  handleCheckIsWin(value: boolean) {
    this.setState({ isWin: value }, () => {
      console.log(this.state.isWin, "isWin __________!!!!");
    });
  }
  handleCheckPlayer() {
    const playerCurr = this.props.players.find(
      (p: IPlayer) => p.id !== this.props.currentPlayer
    );
    this.setState({ player: playerCurr as IPlayer }, () => {});
  }

  handleCheckIsHitted() {
    // console.log(this.state.player, "player");
    const result: any = this.state.player.coordinates.map((i) => {
      if (this.state.currCor === i?.id) {
        const { ...rest } = i;
        rest.isHitted = true;
        if (rest.isShip) {
          this.setState(
            {
              isWin: true,
            },
            () => {}
          );
          // console.log(this.state, rest);
          return { ...rest };
        } else {
          this.setState({ isWin: false }, () => {});
          // console.log(this.state, rest);
          return { ...rest };
        }
      } else {
        const { ...rest } = i;
        // console.log(this.state, rest);
        return { ...rest };
      }
    });
    // console.log(result, "coordinates");

    this.setState(
      {
        player: { ...this.state.player, coordinates: result },
      },
      () => {
        console.log(this.state);

        if (this.props.currentPlayer === 1) {
          if (this.state.isWin) {
            const firstP = this.props.players[0];
            if (firstP.score > 6) {
              Swal.fire({
                title: `Congratulations you won Player ${firstP.id}`,
                confirmButtonText: "Restart",
                showCancelButton: false,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  this.props.restartGame();
                } else {
                  this.props.saveShips({
                    players: [
                      { ...firstP, score: firstP.score + 1 },
                      this.state.player,
                    ],
                  });
                  this.props.restartGame();
                }
              });
            } else {
              this.props.saveShips({
                players: [
                  { ...firstP, score: firstP.score + 1 },
                  this.state.player,
                ],
              });
              this.props.updateGame({ currentPlayer: 1 });
            }
            // this.handleCheckPlayer();
          } else {
            const firstP = this.props.players[0];
            this.props.saveShips({
              players: [{ ...firstP }, this.state.player],
            });
            this.setState({ currCor: 0 });
            this.props.updateGame({ currentPlayer: 2 });
            // this.handleCheckPlayer();
          }
        } else {
          if (this.state.isWin) {
            const secondP = this.props.players[1];
            if (secondP.score > 6) {
              Swal.fire({
                title: `Congratulations you won Player ${secondP.id}`,
                confirmButtonText: "Restart",
                showCancelButton: false,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  this.props.restartGame();
                } else {
                  this.props.saveShips({
                    players: [
                      this.state.player,
                      { ...secondP, score: secondP.score + 1 },
                    ],
                  });
                  this.props.restartGame();
                }
              });
            } else {
              this.props.saveShips({
                players: [
                  this.state.player,
                  { ...secondP, score: secondP.score + 1 },
                ],
              });
              this.props.updateGame({ currentPlayer: 2 });
            }
            // this.handleCheckPlayer();
          } else {
            const secondP = this.props.players[1];
            this.props.saveShips({
              players: [this.state.player, { ...secondP }],
            });
            this.setState({ currCor: 0 });
            this.props.updateGame({ currentPlayer: 1 });
            // this.handleCheckPlayer();
          }
        }
      }
    );
  }

  attackToShips() {
    const { currCor, player, isWin } = this.state;
    const { currentPlayer, players } = this.props;
    this.handleCheckIsHitted();
  }

  componentDidMount() {
    this.handleCheckPlayer();
    console.log(this.state.player.coordinates);

    if (this.props.currentPlayer === 0) {
      this.props.updateGame({ currentPlayer: 1 });
    }
  }

  componentDidUpdate(prevProp: ICompP) {
    if (this.props.currentPlayer !== prevProp.currentPlayer) {
      this.handleCheckPlayer();
    }
  }

  render() {
    return (
      <StyledGaming>
        <h1>Select coordinate Player {this.props.currentPlayer}</h1>
        <div className="squart_wrap">
          {this.state.player.coordinates.map(
            (item: ICoordinates, index: number) => (
              <Squart
                key={index}
                isHitted={item.isHitted}
                isRightHitted={item.isShip && item.isHitted}
                isSelected={this.state.currCor === item.id}
                callBack={() => this.selectShip(item)}
              />
            )
          )}
        </div>
        <div className="btns">
          <CustomButton
            btnLabel="Clear"
            btnClck={() => this.setState({ currCor: 0 })}
            btnDis={false}
          />
          <CustomButton
            btnDis={false}
            btnLabel="Restart game"
            btnClck={() => this.props.restartGame()}
          />
          <CustomButton
            btnDis={this.state.currCor === 0}
            btnLabel="Attack"
            btnClck={() => this.attackToShips()}
          />
        </div>
      </StyledGaming>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  players: state.game.players,
  currentPlayer: state.game.currentPlayer,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveShips: (arg: { players: IPlayer[] }) => dispatch(updateGame(arg)),
    updateGame: (arg: any) => dispatch(updateGame(arg)),
    restartGame: () => dispatch(restartGame()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gaming);
