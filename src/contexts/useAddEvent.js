import { createContext, useContext, useEffect, useState } from "react";
import { hosturl, links } from "../api";
import { message } from "antd";
import useUser from "./userContext";
import axios from "axios";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventDetails, setEventDetails] = useState({});
  const [eventPhotos, setEventPhotos] = useState([]);
  const [eventAttendees, setEventAttendees] = useState([]);
  const [EventLoading, setEventLoading] = useState(false);
  const { authToken } = useUser();
  const [eventCategories, setEventCategories] = useState([]);

  const getEventCategories = async () => {
    try {
      const response = await fetch(hosturl + links.get_event_category);
      const data = await response.json();
      setEventCategories(data || []);
    } catch (error) {
      message.error(error.message);
      console.error(error);
    }
  };
  const addEvent = async (eventData) => {
    setEventLoading(true);
    try {
      const response = await axios.post(hosturl + links.add_event, eventData, {
        headers: {
          Authorization: authToken,
        },
      });
      if (response.status === 201) {
        return { status: true, message: response.data.message };
      }
    } catch (error) {
      console.log(error);
      return { status: false, message: error.response.data.message };
    } finally {
      setEventLoading(false);
    }
  };
  const addEventCategory = async (categoryName) => {
    try {
      const response = await axios.post(
        hosturl + links.add_category,
        {
          category_name: categoryName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken,
          },
        }
      );
      if (response.status === 201) {
        getEventCategories();
        return { status: true, message: "Event Category Created" };
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      //   console.log(error);
      return { status: false, message: error.response.data.error };
    }
  };

  useEffect(() => {
    getEventCategories();
  }, []);

  return (
    <EventContext.Provider
      value={{
        eventDetails,
        eventPhotos,
        eventAttendees,
        EventLoading,
        eventCategories,
        addEvent,
        addEventCategory,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

const useAddEvent = () => {
  return useContext(EventContext);
};

export default useAddEvent;
