import { Await, defer, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";
import { useRouteLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";
import getAuthToken from "../util/getAuthToken";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("singleEvent");
  const fallback = <p style={{ textAlign: "center" }}>Loading...</p>;
  return (
    <>
      <Suspense fallback={fallback}>
        <Await resolve={event}>{(event) => <EventItem event={event} />}</Await>
      </Suspense>
      <Suspense fallback={fallback}>
        <Await resolve={events}>{(events) => <EventsList events={events} />}</Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events" }, { status: 404 });
  }

  const data = await response.json();
  return data.events;
}

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Could not fetch event" }, { status: 404 });
  }

  const data = await response.json();

  return data.event;
}

export async function singleEventLoader({ params }) {
  const id = params.id;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function deleteAction({ request, params }) {
  const id = params.id;
  const method = request.method;
  const token = getAuthToken()
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 404 });
  }

  return redirect("/events");
}
