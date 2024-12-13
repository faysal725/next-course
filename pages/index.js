import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  
  const featuredEvents = getFeaturedEvents();
  return (
  

      <div
        className=""
      >
        <EventList items={featuredEvents} />
      </div>
    
  );
}
