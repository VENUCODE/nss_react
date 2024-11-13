import { createContext, useContext, useState } from "react";
import { hosturl, links } from "../api";
import { message } from "antd";
import useUser from "./userContext";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventDetails, setEventDetails] = useState({});
  const [eventPhotos, setEventPhotos] = useState([]);
  const [eventAttendees, setEventAttendees] = useState([]);
  const [EventLoading, setEventLoading] = useState(false);
  const { authToken } = useUser();

  const queryClient = useQueryClient();

  // Fetch event categories using React Query
  const {
    data: eventCategories = [],
    isError,
    error,
  } = useQuery({
    queryKey: ["eventCategories"],
    queryFn: async () => {
      const response = await fetch(`${hosturl}${links.get_event_category}`);
      if (!response.ok) {
        throw new Error("Failed to fetch event categories");
      }
      return response.json();
    },
    onError: (err) => {
      message.error(err.message || "Failed to fetch event categories");
    },
  });

  // Mutation to add an event
  const addEventMutation = useMutation({
    mutationFn: async (eventData) => {
      setEventLoading(true);
      const response = await axios.post(
        `${hosturl}${links.add_event}`,
        eventData,
        {
          headers: { Authorization: authToken },
        }
      );
      if (response.status === 201) {
        return { status: true, message: response.data.message };
      }
      throw new Error(response.data.message);
    },
    onError: (error) => {
      message.error(error.response?.data?.message || "Failed to add event");
    },
    onSettled: () => {
      setEventLoading(false);
    },
  });

  // Mutation to add an event category
  const addEventCategoryMutation = useMutation({
    mutationFn: async (categoryName) => {
      const response = await axios.post(
        `${hosturl}${links.add_category}`,
        { category_name: categoryName },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken,
          },
        }
      );
      if (response.status === 201) {
        return { status: true, message: "Event Category Created" };
      }
      throw new Error(response.data.error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["eventCategories"]);
    },
    onError: (error) => {
      message.error(error.response?.data?.error || "Failed to add category");
    },
  });

  return (
    <EventContext.Provider
      value={{
        eventDetails,
        eventPhotos,
        eventAttendees,
        EventLoading,
        eventCategories,
        addEvent: addEventMutation.mutateAsync,
        addEventCategory: addEventCategoryMutation.mutateAsync,
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
