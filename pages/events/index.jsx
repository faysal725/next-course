import EventList from '@/components/events/EventList'
import EventsSearch from '@/components/events/events-search'
import { getAllEvents } from '@/dummy-data'
import { useRouter } from 'next/router';
import React from 'react'

export default function AllEventsPage() {

  const allEvents = getAllEvents();
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
