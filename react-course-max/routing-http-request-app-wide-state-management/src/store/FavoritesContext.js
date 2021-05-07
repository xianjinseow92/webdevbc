import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

const FavoritesContextProvider = (props) => {
  /**
   * This is used as a REACT COMPONENT instead of wrapping components with the FavoritesContext.Provider straight up because we want the apps to also re-render and reflect the latest state when the state of the Favorites data changes
   */

  const [userFavorites, setUserFavorites] = useState([]); // use state to control render/re-render of state, and update with latest state data

  /**
   * Favorites add and remove-related functions.
   * Functions are placed and state handled here because we want to control the state through this Provider
   */
  const addFavoritesHandler = (meetup) => {
    /**
     * Adds a Meetup to the Favorites Array
     * A function is used inside setUserFavorites because we need to update the value of the state based on the latest, previous state's value
     */
    setUserFavorites((prevUserFavorites) => {
      // concat used because we want to SET A WHOLE NEW ARRAY to the state, which will therefore cause a re-render (furthermore, .push returns the LENGTH OF THE ARRAY, not the array itself)

      // return here is the value that will be SET as the new state of userFavorites
      return prevUserFavorites.concat(meetup);
    });
  };

  const removeFavoritesHandler = (meetupId) => {
    /**
     * Returns an array which only contains meetupIds that do not match the given meetup
     * Updates state of userFavorites.
     */

    // Callback function passed in because removal of favorites is dependent on latest state
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId); // keep all meetups that are not equal to the input meetupId
    });
  };

  const itemIsFavoriteHandler = (meetupId) => {
    /**
     * Helper function to just check if current meetupId is already favorited
     * @return {boolean}
     */
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  // Model to be used as context (shared data amongst all components who want to consume data from FavoriteContextProvider)
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {" "}
      {/* This will essentially service as a react wrapper component */}{" "}
      {props.children}{" "}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
