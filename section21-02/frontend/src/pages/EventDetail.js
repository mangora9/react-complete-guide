import React, {Suspense} from 'react';
import {useRouteLoaderData, json, redirect, defer, Await} from 'react-router-dom';
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const {event, events} = useRouteLoaderData('event-detail');
  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent}/>}
        </Await>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents}/>}
        </Await>
      </Suspense>

    </>
  );
};

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json(
      { message: 'Could not fetch events.'},
      { status: 500 },
    )
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

const loadEvent = async (eventId) => {
  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw json({
      message: 'Could not fetch details for selected event.'
    }, {
      status: 500,
    })
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

const loader = async ({request, params}) => {
  const {eventId} = params;
  return defer({
    event: loadEvent(eventId),
    events: loadEvents(),
  })
}

const action = async ({params, request}) => {
  const {eventId} = params;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({
      message: 'Could not delete event.'
    }, {
      status: 500,
    });
  }

  return redirect('/events');
}

export default EventDetailPage;
export {
  loader,
  action,
}