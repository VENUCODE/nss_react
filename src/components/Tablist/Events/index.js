import React from "react";
import { p1, p2, p3 } from "../../../assets/home";
import EventCard from "./EventCard";
const eventsData = [
  { id: 1, name: "Event 1", date: "2022-01-01", photo: p1 },
  { id: 2, name: "Event 2", date: "2022-01-15", photo: p2 },
  { id: 3, name: "Event 3", date: "2022-02-01", photo: p3 },
  { id: 1, name: "Event 1", date: "2022-01-01", photo: p1 },
  { id: 2, name: "Event 2", date: "2022-01-15", photo: p2 },
  { id: 3, name: "Event 3", date: "2022-02-01", photo: p3 },
];

const Events = () => {
  return (
    <div className="mt-2 container-fluid">
      <div className="row ">
        {eventsData.map((event) => (
          <EventCard
            pic={event.photo}
            heading={event.name}
            date={new Date(event.date).toDateString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
