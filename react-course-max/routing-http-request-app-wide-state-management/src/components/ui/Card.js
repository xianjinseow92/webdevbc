import classes from "./Card.module.scss";

function Card(props) {
  /**
   * Used as a wrapper around content
   */
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
