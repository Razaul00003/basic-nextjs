import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(entereedMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(entereedMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetupPage;
