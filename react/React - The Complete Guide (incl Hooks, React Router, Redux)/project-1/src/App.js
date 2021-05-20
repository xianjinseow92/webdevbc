import logo from "./logo.svg";
import "./App.css";

// UI-related components
import Container from "./components/UI/Container/Container";
import Card from "./components/UI/Card";

function App() {
  return (
    <Container>
      <div className="App">
        {/* Form to add shit (wrapped in a card) */}
        <Card>
          <div>Testing out this shit</div>
        </Card>

        {/* Conditional rendering */}
        {/* User list > user (wrapped in card) */}
      </div>
    </Container>
  );
}

export default App;
