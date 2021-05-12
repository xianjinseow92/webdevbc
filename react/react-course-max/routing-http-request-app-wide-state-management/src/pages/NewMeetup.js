import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  /**
   * Page that will be loaded by router.
   * Router package will determine when this page should be loaded
   */
  const history = useHistory();

  // Passing data from child to parent
  // 1. Create a callback function in parent component. This func will get data from child component
  function addNewMeetup(meetupData) {
    /**
     * POST meetupData to firebase database. Navigates back to home on successful POST request
     * @param {meetupData} meetupData Object containing values retrieved from form in NewMeetupForm Component.
     */
    // Send a POST request to store new data on firebase database
    fetch(
      "https://meetup-app-88832-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json", // make it clear that this data contains json data
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      {/* 2. Pass callback function as a prop to child component */}
      <NewMeetupForm onAddMeetup={addNewMeetup} />
      {/* 3. Child will call the callback function using the value stored in props.onAddMeetup */}
    </section>
  );
}

export default NewMeetupPage;
