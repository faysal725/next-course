import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "@/helpers/api-utils";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import Head from "next/head";
import Comments from "@/components/input/comments";

export default function EventDetailsPage({ selectedEvent }) {
  const event = selectedEvent;

  if (!event) {
    return (
      <>
        <div>
          <p>Loading.......</p>
        </div>
      </>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" contenct={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}

// fallback: blocking means this page will be first statically build then it will show up to the getSupportedBrowsers. and fallback:true means if this path is not found then it will render to the browser and create page
