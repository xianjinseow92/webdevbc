import { Route, Switch } from "react-router-dom"; // defines different paths in the url to listen to and which components should be loaded for these paths


// Components
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

// Layout-related Components
import Layout from './components/layout/Layout'

function App() {
  return (
    <Layout>
    {/* Pages to load */}
      <Switch>
        <Route path="/" exact>
          {/* Default Path */}
          {/* Route AllMeetupsPage on root page */}
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
