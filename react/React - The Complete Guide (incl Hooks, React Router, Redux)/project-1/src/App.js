import "./App.css";

// Components
import User from "./components/UserList/User/User";

// UI-related components
import Container from "./components/UI/Container/Container";
import Card from "./components/UI/Card";

function App() {
  return (
    <Container>
      <div className="App">
        {/* Form to add shit (wrapped in a card) */}
        <Card>
          <User name={"xj"} age={69}/>
        </Card>
        {/* Conditional rendering */}
        {/* User list > user (wrapped in card) */}
      </div>
    </Container>
  );
}

export default App;
