import EventAccessTemplate from "templates/Event/Access";

export default function Access() {
  return <EventAccessTemplate />;
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}