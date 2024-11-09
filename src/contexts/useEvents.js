import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { hosturl, links } from "../api";

const EventContext = createContext();

export const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const getEvents = useCallback(async () => {
    try {
      const res = await axios.get(hosturl + links.get_events);
      if (res.status === 200 && res.data) {
        setEvents(res.data);
      } else {
        throw new Error("Failed to fetch events");
      }
    } catch (error) {
      console.log("error " + error);
    }
  }, []);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <EventContext.Provider value={{ events, getEvents }}>
      {children}
    </EventContext.Provider>
  );
};

const useEvents = () => {
  return useContext(EventContext);
};

export default useEvents;
