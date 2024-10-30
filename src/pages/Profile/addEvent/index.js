import React from "react";
import EventDetails from "./EventDetails";
import EventAttendees from "./EventAttendees";
import EventPhotos from "./EventPhotos";
import { Button, Divider } from "antd";

const AddEvent = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center f">
      <Divider
        orientation="left"
        className="ff-p text-blue fw-semibold"
        orientationMargin={10}
      >
        {" "}
        Event Details
      </Divider>
      <EventDetails />
      <Divider
        orientation="left"
        className="ff-p text-blue fw-semibold"
        orientationMargin={10}
      >
        {" "}
        Event Attendees
      </Divider>
      <EventAttendees />
      <Divider
        orientation="left"
        className="ff-p text-blue fw-semibold"
        orientationMargin={10}
      >
        {" "}
        Event Photos
      </Divider>
      <EventPhotos />
      <Divider
        orientation="left"
        className="ff-p text-blue fw-semibold"
        orientationMargin={10}
      >
        {" "}
        Submit the details
      </Divider>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          mt: 2,
          py: 1.5,
          fontWeight: "bold",
          fontSize: "1rem",
          backgroundColor: "#1976d2",
          "&:hover": {
            backgroundColor: "#1565c0",
          },
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddEvent;
