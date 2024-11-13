import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { containerVariant, pageVariant } from "../../animationVariants";
import ImagesWrapper from "./ImagesWrapper";
import { hosturl } from "../../api";
import { Chip } from "@mui/material";
import { message } from "antd";
import { FaClock } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { AutoComplete } from "antd";
import { MdSignalCellularNodata } from "react-icons/md";
import Loading from "../../components/Loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GalleryPage = () => {
  const [search, setSearch] = useState(null);
  const [dateSort, setDateSort] = useState(true);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventPhotos"],
    queryFn: async () => {
      const res = await axios.get(`${hosturl}/geteventphotos`);
      if (res.status !== 200) {
        throw new Error("Failed to get images");
      }

      const groupedImages = Object.entries(res.data).reduce((acc, val) => {
        const photo = val[1];
        if (!acc[photo.event_name]) {
          acc[photo.event_name] = {
            event_id: photo.event_id,
            event_name: photo.event_name,
            date: photo.uploaded_on,
            images: [photo.photo_url],
          };
        } else {
          acc[photo.event_name].images.push(photo.photo_url);
        }
        return acc;
      }, {});
      return groupedImages;
    },

    onError: (err) => {
      message.error(err.message || "Error fetching images.");
    },
  });

  const [curData, setCurData] = useState({});

  useEffect(() => {
    if (data) {
      let entries = Object.entries(data);

      if (dateSort !== null) {
        entries = entries.sort((a, b) =>
          dateSort
            ? new Date(a[1].date) - new Date(b[1].date)
            : new Date(b[1].date) - new Date(a[1].date)
        );
      }

      if (search) {
        entries = entries.filter(([key, value]) =>
          value.event_name.toLowerCase().includes(search.toLowerCase())
        );
      }

      setCurData(Object.fromEntries(entries));
    }
  }, [data, search, dateSort]);

  if (isLoading) {
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

  if (isError) {
    return (
      <motion.div
        initial="initial"
        animate="enter"
        variants={pageVariant}
        className="dvh100 member-bg"
      >
        <div className="text-center mt-5">
          <p>{error.message}</p>
        </div>
      </motion.div>
    );
  }

  if (Object.keys(curData).length === 0) {
    return (
      <motion.div
        initial="initial"
        animate="enter"
        variants={pageVariant}
        className="dvh100 position-relative container-fluid member-bg m-0 p-0 pt-2"
      >
        <div className="text-center">
          <Loading />
          <p>No images found.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100 position-relative container-fluid member-bg m-0 p-0 pt-2"
    >
      <div
        style={{ zIndex: 4 }}
        className="container container-sm-fluid sticky-top top-0 w-100 h-auto py-3 bg-blur bg-white bg-opacity-10 ff-p text-blue-pale"
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
              options={Object.keys(data || {}).map((key) => ({
                value: key,
                label: key,
              }))}
            />
          </div>
          <div className="col-auto">
            <Chip
              label={dateSort ? "Date (Asc)" : "Date (Desc)"}
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

      {Object.entries(curData).map(([key, value], index) => (
        <ImagesWrapper
          key={index}
          date={value.date}
          event_id={value.event_id}
          images={value.images}
          event_name={value.event_name}
        />
      ))}
    </motion.div>
  );
};

export default GalleryPage;
