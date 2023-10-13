import { json } from "react-router-dom";
import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
import { defer, Await } from "react-router-dom";
import { Suspense } from "react";

const EventsPage = () => {
  const { events } = useLoaderData();
  const fallback = <p style={{ textAlign: "center" }}>Loading...</p>;
  return (
    <Suspense fallback={fallback}>
      <Await resolve={events}>
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 404 });
  }

  const data = await response.json();
  return data.events;
}

export const EventsLoader = () => {
  return defer({
    events: loadEvents(),
  });
};
