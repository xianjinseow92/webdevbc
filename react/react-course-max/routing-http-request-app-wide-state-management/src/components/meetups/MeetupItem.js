// Components
import Card from "./../ui/Card";

import classes from "./MeetupItem.module.scss";

import { useContext } from "react";

import FavoritesContext from "./../../store/FavoritesContext";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext); // now this component is able to utilize the value from the Context provider

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        key: props.id,
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description
      })
    }

    console.log(favoritesCtx.favorites);
  };

  const { id, image, title, address, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{ itemIsFavorite ? "Remove from Favorites" : "To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
