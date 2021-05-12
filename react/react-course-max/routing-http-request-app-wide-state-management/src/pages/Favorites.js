// Context-related
import { useContext } from "react";
import FavoritesContext from "./../store/FavoritesContext";

// Components
import MeetupList from "./../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  /**
   * Page that will be loaded by the router
   * Router package will determine when this page (or actually, a component), will be rendered
   */

  let content;

  if (favoritesCtx.totalFavorites === 0) {
      content = <h1>You got no favorites yet mate start adding some!</h1>
  } else {
      content = <MeetupList meetups={favoritesCtx.favorites} />
      console.log('favorites page: ', favoritesCtx.favorites)
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
