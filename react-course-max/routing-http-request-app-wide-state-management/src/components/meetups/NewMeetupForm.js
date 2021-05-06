import Card from "../ui/Card";
import { useRef } from "react"; // emulates #localReference on angular. use this for READING VALUES ONLY

import classes from "./NewMeetupForm.module.scss";

function NewMeetupForm(props) {
  // Read & Assign Entered values
  // Concept of Refs to DOM elements
  const titleInputRef = useRef(); // basically creating something like a local reference in angular
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();

  function submitHandler(evt) {
    evt.preventDefault(); // prevents default behaviour of form submissions, which submits http requests and then reloads the page (the reloading is something we don't want)

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesc,
    };

    // onAddMeetup prop is a property that will receive a function as a value (from parent)
    props.onAddMeetup(meetupData); // run this callback function, which takes meetupData as the parameter
    // function (which is parent's func) is called, with meetupData as parameter.
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image Url</label>
          <input type="url" id="image" required ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            required
            rows="5"
            ref={descInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
