import MeetupList from '../components/meetups/MeetupList';
import MeetupItem from '../components/meetups/MeetupItem';

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
  return (
    <section>
      <h1>All Meetups</h1>
      {/* List of meetups */}
      <MeetupList meetup={DUMMY_DATA}/>
    </section>
  );
}

export default AllMeetupsPage;
