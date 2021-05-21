import "./App.css";

// Components
import UserList from "./components/UserList/UserList";
import Form from "./components/Form/Form";

// UI-related components
import Container from "./components/UI/Container/Container";
import Card from "./components/UI/Card";

function App() {
  /**
   * App component that holds everything. Also manages data
   */

  const getFormValue = evt => {
    console.log(evt);
  }

  return (
    <Container>
      <div className="App">
        {/* Form to add shit */}
        <Card>
          <Form getFormValue={getFormValue}/>
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
