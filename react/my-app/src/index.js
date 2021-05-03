import React from 'react';
import ReactDOM from 'react-dom';

// Stylesheets
import './index.scss';

class Square extends React.Component {
  /**
   * @param {string} value Square button content
   * @returns 
   */

  // reactComponents have 2 kinds of in-built fields
    // @param props -> retrieves values from parent or whatever value is passed into this component
    // @param state -> sets the data state of this component

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  previousValue = this.props.value;

  render() {
    return (
      <button 
        className="square" 
        onClick={this.setSquareContentToX}
      >
        {this.state.value}
      </button>
    );
  }

  setSquareContentToX = () => {
    this.setState({value: 'X'});
  }

  setSquareContentToXTest = () => {
    if (this.state.value === 'X') {
      this.setState({value: this.previousValue});
    } else {
      this.setState({value: 'X'});
    }
  }
}
  
class Board extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      squares: Array(9).fill(null), // array that corresponds to 9 squares on the board
    }
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  