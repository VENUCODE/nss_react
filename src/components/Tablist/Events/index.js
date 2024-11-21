import React from "react";
import EventCard from "./EventCard";
import ViewMore from "../../ViewMore";
import { hosturl, links } from "../../../api";
import axios from "axios";
import { message } from "antd";
import { useQuery } from "@tanstack/react-query";

// Fetching function for top events
const fetchTopEvents = async () => {
  const result = await axios.get(`${hosturl}${links.gettopevents}`);
  if (result.status === 200) {
    return result.data;
  } else {
    throw new Error("Failed to fetch events");
  }
};

const Events = () => {
  const {
    data: events = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["topEvents"],
    queryFn: fetchTopEvents,
    onError: (error) => {
      message.error(error.message || "An error occurred while fetching events");
    },
  });

  if (isLoading) return <div>Loading events...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-2 container-fluid">
      <div className="row  col-12 mx-auto">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard
              key={event.event_id}
              pic={`${hosturl}${event.photo_url}`}
              heading={event.event_name}
              link={`/events/${event.event_id}`}
              date={new Date(event.hosted_on).toDateString()}
            />
          ))
        ) : (
          <div>No events available</div>
        )}
      </div>
    </div>
  );
};

export default Events;
