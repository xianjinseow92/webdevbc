import { Component } from "react";
// Styles
import "./App.css";

// Components
import CardList from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super(); // to initialize Component's constructor
    this.state = {
      monsters: [],
    };
  }

  componentDidMount = () => {
    /**
     * runs once ONLY. only when component mounts.
     */
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
    console.log("ComponentDidMount");
  };

  render() {
    return (
      <div className="App">
        {console.log("App rendered")}
        <CardList name="lj">
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
        <button onClick={this.initializeMonstersHandler}>
          Create Monsters
        </button>
      </div>
    );
  }
}

export default App;
