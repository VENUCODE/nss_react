import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Divider, Image, message } from "antd";
import { Avatar, Chip } from "@mui/material";
import useEvents from "../../contexts/useEvents";
import { hosturl } from "../../api";
import axios from "axios";
import Loading from "../../components/Loading";
import { MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";
// Add this function to the top of your file
function getRandomColor() {
  const colors = ["#3498db", "#f1c40f", "#2ecc71", "#e74c3c", "#9b59b6"];
  return colors[Math.floor(Math.random() * colors.length)];
}
const SingleEvent = () => {
  const { events } = useEvents();
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function getEvent() {
      try {
        setLoading(true);
        const res = await axios.get(`${hosturl}/events/event/${eventId}`);
        if (res.status === 200) {
          setEvent(res.data);
        }
      } catch (error) {
        message.error("Error fetching event: " + error.message, 1);
      } finally {
        setLoading(false);
      }
    }
    if (eventId) {
      getEvent();
    }
  }, [eventId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dots-bg py-4 px-2"
    >
      <div className="col-md-10 col-12 bg-light bg-opacity-50 rounded-4 mx-auto px-2 px-sm-5 py-4 border-0 text-light">
        <div className="row ">
          <div className="col-12 text-center member-bg bg-opacity-50 rounded-4 py-3">
            <h1 className="heading ff-p text-capitalize row">
              <p className="d-inline fs-1 col-1">🎉</p>
              <span className="text-ellipsis col-10">
                {event?.event_name || "Event Name Not Available"}
              </span>
              <p
                className="d-inline fs-1 col-1"
                style={{ transform: "rotateY(180deg)" }}
              >
                🎉
              </p>
            </h1>
            <Chip
              className="text-light ff-p  text-capitalize"
              size="large"
              color="primary"
              label={
                event?.ec_name
                  ? event.ec_name.charAt(0).toUpperCase() +
                    event.ec_name.slice(1).toLowerCase()
                  : "Event Category Not Available"
              }
            />
          </div>
          <Divider className="text-light ff-p" orientation="center">
            Details
          </Divider>
          <div className="col-12">
            <div className="d-flex align-items-center ff-p dots-bg my-1  p-3 rounded-3">
              <span className="ms-2 text-white ff-p fs-6 ">
                {event?.description ? event.description : "No description "}
              </span>
            </div>
            <hr />
          </div>
          <div className="col-sm-6 col-12  ">
            <div className="d-flex align-items-center ff-p bg-light bg-opacity-50 p-3 rounded-3">
              <strong className="text-blue">Held on:</strong>
              <span className="ms-2 text-white ff-p fs-6 ">
                {event?.hosted_on
                  ? new Date(event.hosted_on).toDateString()
                  : "Date not available"}
              </span>
            </div>
          </div>
          <div className="col-sm-6 col-12 ">
            <div className="d-flex align-items-center ff-p bg-light bg-opacity-50 p-3 rounded-3">
              <MdLocationOn className="text-red" size={20} />

              <span className="ms-2 ff-p text-capitalize">
                {event?.location || "Location not specified"}
              </span>
            </div>
          </div>
          <div className="col-12">
            <hr />
            <strong>Attendees:</strong>
            <div className="mt-2 d-flex flex-wrap gap-2">
              {event?.attendees && event.attendees.length > 0 ? (
                event.attendees.map((att, index) => (
                  <Link key={index} to={"/members/" + att}>
                    <Chip
                      className="text-light ff-p  text-capitalize ff-p bg-black"
                      onClick={() => {
                        navigate();
                      }}
                      avatar={
                        <Avatar
                          src={hosturl + att.profile_photo}
                          className="border border-1 border-light"
                          key={index}
                          sx={{
                            bgcolor: getRandomColor(),
                            cursor: "pointer",
                          }}
                        >
                          {att.user_name
                            ?.trim()
                            .split(" ")
                            .slice(0, 2)
                            .map((word) => word.charAt(0).toUpperCase())}
                        </Avatar>
                      }
                      label={att.user_name}
                    />
                  </Link>
                ))
              ) : (
                <h2 className="ff-p text-light">No attendees</h2>
              )}
            </div>
          </div>
          <div className="col-12">
            <hr />
            <strong>Photos:</strong>
            <div className="row g-2 mt-2">
              {Array.isArray(event?.photo_urls) &&
              event.photo_urls.length > 0 ? (
                event.photo_urls.map((url, index) => (
                  <div key={index} className="col-6 col-sm-4 col-md-43">
                    <Image
                      height={"100%"}
                      width={"100%"}
                      alt={"photo" + index}
                      src={hosturl + url}
                      className="w-100 rounded-3"
                      style={{ objectFit: "cover", height: "100px" }}
                    />
                  </div>
                ))
              ) : (
                <span>No photos available</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleEvent;
