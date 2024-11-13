import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { hosturl, links } from "../api";
import { useQuery } from "@tanstack/react-query";

const EventContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const res = await axios.get(hosturl + links.get_events);
    if (res.status === 200 && res.data) {
      return res.data;
    }
    throw new Error("Failed to fetch events");
  };

  const { refetch, error, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    enabled: false,
    retry: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await refetch();
      if (data.data) {
        setEvents(data.data);
      }
    };

    fetchData();
  }, [refetch]);

  return (
    <EventContext.Provider value={{ events, isLoading, error, refetch }}>
      {children}
    </EventContext.Provider>
  );
};

const useEvents = () => {
  return useContext(EventContext);
};

export default useEvents;
