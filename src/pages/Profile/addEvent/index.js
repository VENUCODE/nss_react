import React, { Suspense, useEffect, useState } from "react";
import EventDetails from "./EventDetails";
import EventAttendees from "./EventAttendees";
import EventPhotos from "./EventPhotos";
import { Button, Divider, message } from "antd";
import AddCategory from "./AddCategory";
import { FormControl, LinearProgress } from "@mui/material";
import useAddEvent from "../../../contexts/useAddEvent";
import ConfettiExplosion from "react-confetti-explosion";
import { useWindowSize } from "react-use/lib";

const AddEvent = () => {
  const [formData, setFormData] = useState({});
  const [clear, setClear] = useState(false);
  const { addEvent, EventLoading } = useAddEvent();
  const [success, setSuccess] = useState(false);
  const { height, width } = useWindowSize();
  useEffect(() => {
    if (clear) {
      setFormData({});
      setClear(false);
    }
  }, [clear]);
  const validateForm = () => {
    const {
      attendees,
      event_name,
      location,
      category,
      hosted_on,
      description,
      images,
    } = formData;

    const EventData = new FormData();
    EventData.append("ename", event_name.trim());
    EventData.append("location", location.trim());

    if (category && category.value) EventData.append("ec_id", category.value);
    if (hosted_on) EventData.append("hosted_on", hosted_on);
    if (description && description.trim())
      EventData.append("description", description.trim());

    if (attendees && attendees.length > 0) {
      attendees.forEach((attendee, index) => {
        EventData.append(`eattend[${index}]`, attendee);
      });
    }

    if (images && images.length > 0) {
      images.forEach((image, index) => {
        EventData.append(`images-${index}`, image.originFileObj);
      });
    }

    return EventData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = validateForm();
    const res = await addEvent(data);
    if (res.status) {
      message.success(res.message, 2);
      setSuccess(true);
    } else {
      message.error(res.message, 2);
    }
    setClear(true);
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center f">
        <AddCategory />

        <div className="container-fluid  mt-3 rounded-3 threed-look">
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
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
              <EventAttendees
                formData={formData}
                setFormData={setFormData}
                clearForm={clear}
              />
              <Divider
                orientation="left"
                className="ff-p text-blue fw-semibold"
                orientationMargin={10}
              >
                {" "}
                Event Photos
              </Divider>

              <EventPhotos
                formData={formData}
                setFormData={setFormData}
                clearForm={clear}
              />
              <Divider
                orientation="left"
                className="ff-p text-blue fw-semibold"
                orientationMargin={10}
              >
                {" "}
                Submit the details
              </Divider>

              {EventLoading && (
                <LinearProgress color="success" className="w-100" />
              )}
              <div className="bg-white shadow rounded-3 w-100 gap-2 px-2 py-3 d-flex justify-content-center ">
                <Button
                  htmlType="submit"
                  type="primary"
                  className="rounded-1 w-75 mx-auto  ff-p fw-semibold bg-blue-light shadow "
                >
                  Add Event
                </Button>
                <Button
                  htmlType="reset"
                  type="danger"
                  onClick={(e) => {
                    e.preventDefault();
                    setClear(true);
                  }}
                  className="rounded-1 w-75 mx-auto bg-danger text-light ff-p fw-semibold shadow "
                >
                  Clear Form
                </Button>
              </div>
            </FormControl>
          </form>
          {success && (
            <Suspense fallback={<div>Loading...</div>}>
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <ConfettiExplosion
                  force={0.8}
                  height={height}
                  width={width}
                  duration={3000}
                  color={[
                    "#FFC700",
                    "#FF0000",
                    "#2E3191",
                    "#41BBC7",
                    "#8B9467",
                    "#6495ED",
                    "#DC143C",
                    "#008000",
                  ]}
                  particleCount={200}
                  onComplete={() => setSuccess(false)}
                />
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default AddEvent;
