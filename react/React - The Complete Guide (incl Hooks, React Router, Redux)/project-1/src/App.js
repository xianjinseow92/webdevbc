import "./App.css";

// Components

import UserList from "./components/UserList/UserList";

// UI-related components
import Container from "./components/UI/Container/Container";
import Card from "./components/UI/Card";

function App() {
  return (
    <Container>
      <div className="App">
        {/* Form to add shit (wrapped in a card) */}
        <Card>
          <UserList/>
        </Card>
        {/* Conditional rendering */}
        {/* User list > user (wrapped in card) */}
      </div>
    </Container>
  );
}

export default App;
