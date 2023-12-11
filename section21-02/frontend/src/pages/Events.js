import {Suspense} from 'react';
import {defer, Await, json, useLoaderData} from 'react-router-dom';
import EventsList from '../components/EventsList';

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // 올바르지 않은 응답 사례 처리함!
    // return {
    //   isError: true,
    //   message: 'Could not fetch events.',
    // }
    // throw new Response(
    //   JSON.stringify({
    //     message: 'Could not fetch events.'
    //   }),
    //   {
    //     status: 500,
    //   }
    // );
    return json(
      { message: 'Could not fetch events.'},
      { status: 500 },
    )
  } else {
    // const resData = await response.json();
    // return resData.events;
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}

const EventsPage = () => {
  const {events} = useLoaderData();

  return (
    <>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} /> }
        </Await>
      </Suspense>
    </>
  );
}

const loader = async () => {
  return defer({
    events: loadEvents(),
  })
}

export default EventsPage;
export {
  loader,
}