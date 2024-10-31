import React, { useState } from "react";
import EventDetails from "./EventDetails";
import EventAttendees from "./EventAttendees";
import EventPhotos from "./EventPhotos";
import { Button, Divider } from "antd";
import AddCategory from "./AddCategory";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    event_name: "",
    category: "",
    hosted_on: "",
    location: "",
    description: "",
  });
  return (
    <div className="d-flex flex-column justify-content-center align-items-center f">
      <AddCategory />
      <div className="container-fluid  mt-3 rounded-3 threed-look">
        <Divider
          orientation="left"
          className="ff-p text-blue fw-semibold"
          orientationMargin={10}
        >
          {" "}
          Event Details
        </Divider>
        <EventDetails formData={formData} setFormData={setFormData} />
        <Divider
          orientation="left"
          className="ff-p text-blue fw-semibold"
          orientationMargin={10}
        >
          {" "}
          Event Attendees
        </Divider>
        <EventAttendees formData={formData} setFormData={setFormData} />
        <Divider
          orientation="left"
          className="ff-p text-blue fw-semibold"
          orientationMargin={10}
        >
          {" "}
          Event Photos
        </Divider>
        <EventPhotos formData={formData} setFormData={setFormData} />
        <Divider
          orientation="left"
          className="ff-p text-blue fw-semibold"
          orientationMargin={10}
        >
          {" "}
          Submit the details
        </Divider>
        <div className="bg-white rounded-3 w-100 py-3 d-flex justify-content-center ">
          <Button
            htmlType="submit"
            type="primary"
            className="rounded-1 w-75 mx-auto bg-blue-light shadow "
          >
            Add Event
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
