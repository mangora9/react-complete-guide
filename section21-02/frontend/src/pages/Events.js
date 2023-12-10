import {json, useLoaderData} from 'react-router-dom';
import EventsList from '../components/EventsList';

const EventsPage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>
  }
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

const loader = async () => {
  const response = await fetch('http://localhost:8080/eventsasdasd');

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
    return response
  }
}

export default EventsPage;
export {
  loader,
}