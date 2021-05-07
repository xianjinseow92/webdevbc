// Components
import MeetupList from "../components/meetups/MeetupList";

// Hooks
import { useState, useEffect } from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  /**
   * Page that is loaded by router.
   * Use router package to define when which page should be loaded
   */
  const [isLoading, setIsLoading] = useState(true); // loading is true before retrieval of meetup data from firebvase
  const [loadedMeetups, setLoadedmeetups] = useState([]); // used to render meetups on AllMeetups page

  const databaseUrl =
    "https://meetup-app-88832-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json";

  useEffect(() => {
    setIsLoading(true); // placed here because should useEffect be run again, it would set isLoading is true. (which is correct because you SHOULD be "loading" when your data has not be retrieved yet)
    fetch(databaseUrl)
      .then((res) => res.json())
      .then((data) => {
        const meetups = []; 

        for (const key in data) {
          let meetup = {
            key: key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedmeetups(Object.values(meetups));
      });
  }, []);

  // Use state to control what is shown to the user on the screen.
    // Because when we are retrieving data, we need to wait for a successful response from the database.
    // This waiting time can be made better UX-wise by displaying a LOADING SPINNER to the user

  // Return loading msg when data is not yet retrieved
  if (isLoading) {
    return (
      <section>
        <h1>We still retrieving data for y'all my dudes</h1>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* List of meetups */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
