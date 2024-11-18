import React, { useEffect, useState } from "react";
import "./events.css";
import EventCard from "../../components/Tablist/Events/EventCard";

import useEvents from "../../contexts/useEvents";
import { hosturl } from "../../api";
import { AutoComplete } from "antd";
import { IoSearchCircleOutline } from "react-icons/io5";
import { Chip } from "@mui/material";
import { FaClock } from "react-icons/fa";
import { pageVariant } from "../../animationVariants";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
const EventsPage = () => {
  const { events } = useEvents();
  const [dateSort, setDateSort] = useState(true);
  const [search, setSearch] = useState(null);
  const [curData, setCurData] = useState([]);
  useEffect(() => {
    if (events) {
      let entries = events;

      if (dateSort !== null) {
        entries = entries.sort((a, b) =>
          dateSort
            ? new Date(a.hosted_on) - new Date(b.hosted_on)
            : new Date(b.hosted_on) - new Date(a.hosted_on)
        );
      }
      if (search !== null) {
        entries = entries.filter((value) =>
          value.ec_name.toLowerCase().includes(search.toLowerCase())
        );
      }

      setCurData(entries);
    }
  }, [search, dateSort, events]);

  useEffect(() => {
    if (events) {
      setCurData(events);
    }
  }, [events]);

  if (curData.length === 0) {
    return (
      <motion.div
        initial="initial"
        animate="enter"
        variants={pageVariant}
        className="dvh100 member-bg"
      >
        <Loading />
      </motion.div>
    );
  }
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100 container-fluid member-bg "
    >
      <div
        style={{ zIndex: 4 }}
        className="container  container-sm-fluid sticky-top top-0 w-100 h-auto py-3 bg-blur bg-white bg-opacity-10 ff-p text-blue-pale"
      >
        <div className="row justify-content-end align-items-center">
          <div className="col-md-6 col-8">
            <AutoComplete
              placeholder="Search event name"
              allowClear
              className="w-100"
              enterButton="Search"
              notFoundContent={<div>No matches found</div>}
              prefix={<IoSearchCircleOutline />}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
              onSearch={(val) => setSearch(val)}
              onSelect={(val) => setSearch(val)}
              options={
                events &&
                events.map((key) => ({
                  value: key.ec_name,
                  label: key.ec_name,
                }))
              }
            />
          </div>
          <div className="col-auto">
            <Chip
              label={dateSort ? "Oldest " : "Newest"}
              size="small"
              color="error"
              icon={<FaClock />}
              onClick={() => {
                setSearch(null);
                setDateSort((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
      <div className="row container py-2 col-md-10 col-12 mx-auto">
        {curData?.map((ev, i) => {
          return (
            <EventCard
              key={i}
              pic={
                Array.isArray(ev.photo_urls) && ev.photo_urls.length > 0
                  ? hosturl + ev.photo_urls[0]
                  : ""
              }
              heading={ev.event_name}
              link={"/events/" + ev.event_id}
              date={
                ev.hosted_on
                  ? new Date(ev.hosted_on).toDateString()
                  : "Date not available"
              }
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default EventsPage;
