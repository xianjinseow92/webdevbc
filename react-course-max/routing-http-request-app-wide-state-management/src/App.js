import { Route, Switch } from "react-router-dom"; // defines different paths in the url to listen to and which components should be loaded for these paths

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
    {/* Navigation */}
    <MainNavigation/>

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
    </div>
  );
}

export default App;
