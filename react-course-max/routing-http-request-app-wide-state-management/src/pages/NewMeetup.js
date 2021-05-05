import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  /**
   * Page that will be loaded by router.
   * Router package will determine when this page should be loaded
   */
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  );
}

export default NewMeetupPage;
