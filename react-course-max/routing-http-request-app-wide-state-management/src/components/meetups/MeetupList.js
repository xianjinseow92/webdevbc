// Components
import MeetupItem from "./MeetupItem";

// Styling
import classes from "./MeetupList.module.scss";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetup.map((meetup) => (
        <MeetupItem
          key={props.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
