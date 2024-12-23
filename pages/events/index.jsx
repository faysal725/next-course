import EventList from '@/components/events/EventList'
import EventsSearch from '@/components/events/events-search'
import { getAllEvents } from '@/helpers/api-utils'
import { useRouter } from 'next/router';
import React from 'react'

export default function AllEventsPage(props) {

  const allEvents = props.events
  const router = useRouter();

  

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }

  return (
    <div>
      <EventsSearch items={allEvents} onSearch={findEventHandler} />
      <EventList items={allEvents}/>
    </div>
  )
}


export async function getStaticProps() {
  const events = await getAllEvents();


  return  {
    props: {
      events: events
    },
    revalidate: 10
  }
}