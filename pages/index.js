import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/helpers/api-utils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home({ events }) {
  return (
    <div className="">
      <Head>
        <title>Next Js Events</title>
        <meta name="description" contenct="find ..."/>
      </Head>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

// revalidate does generate this static page after given seconds
