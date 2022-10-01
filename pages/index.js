import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A frist meetup ",
    image:
      "https://images.unsplash.com/photo-1661435036699-8686dbfc5304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    address: "XHD 73, NY , USA",
    description: " awesome meetup on future of nextjs ",
  },
  {
    id: "m2",
    title: "A second  meetup ",
    image:
      "https://images.unsplash.com/photo-1661424869084-02299b733b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    address: "XHD 13, NY , Tanzania",
    description: " awesome meetup on future of react ",
  },
];

function Homepage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export default Homepage;
