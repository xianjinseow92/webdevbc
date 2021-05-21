import "./App.css";

// Components

import UserList from "./components/UserList/UserList";
import FormattedInput from "./components/Functional/FormattedInput";

// UI-related components
import Container from "./components/UI/Container/Container";
import Card from "./components/UI/Card";

function App() {
  /**
   * App component that holds everything. Also manages data
   */

  return (
    <Container>
      <div className="App">
        {/* Form to add shit */}
        <Card>
          <div>testiong</div>
        </Card>
        {/* Conditional rendering */}
        {/* User list > user (wrapped in card) */}
        <Card>
          <UserList />
        </Card>
      </div>
    </Container>
  );
}

export default App;
