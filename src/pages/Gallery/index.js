import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";
import ImagesWrapper from "./ImagesWrapper";
import axios from "axios";
import { hosturl } from "../../api";
import { Chip } from "@mui/material";
import { message } from "antd";
import { FaClock } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { AutoComplete } from "antd";
import { MdSignalCellularNodata } from "react-icons/md";
import Loading from "../../components/Loading";

const GalleryPage = () => {
  const [groupedImages, setGroupedImages] = useState({});
  const [curData, setCurData] = useState({});
  const [search, setSearch] = useState(null);
  const [dateSort, setDateSort] = useState(true);
  const [loading, setLoading] = useState(true); // Loading state for data fetch
  const [error, setError] = useState(null); // Error state for fetch errors

  const getPhotos = async () => {
    try {
      const res = await axios.get(`${hosturl}/geteventphotos`);
      if (res.status !== 200) {
        throw new Error("Failed to get images");
      }

      const data = Object.entries(res.data).map((val) => val[1]);
      const accum = data.reduce((acc, val) => {
        if (!acc[val.event_name]) {
          acc[val.event_name] = {
            event_id: val.event_id,
            event_name: val.event_name,
            date: val.uploaded_on,
            images: [val.photo_url],
          };
        } else {
          acc[val.event_name].images.push(val.photo_url);
        }
        return acc;
      }, {});
      setGroupedImages(accum);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Error fetching images. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (groupedImages) {
      let entries = Object.entries(groupedImages);

      if (dateSort !== null) {
        entries = entries.sort((a, b) =>
          dateSort
            ? new Date(a[1].date) - new Date(b[1].date)
            : new Date(b[1].date) - new Date(a[1].date)
        );
      }
      if (search !== null) {
        entries = entries.filter(([key, value]) =>
          value.event_name.toLowerCase().includes(search.toLowerCase())
        );
      }

      setCurData(Object.fromEntries(entries));
    }
  }, [search, dateSort, groupedImages]);

  useEffect(() => {
    if (groupedImages) {
      setCurData(groupedImages);
    }
  }, [groupedImages]);

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100 position-relative container-fluid member-bg  m-0 p-0 pt-2"
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
              options={
                groupedImages &&
                Object.keys(groupedImages).map((key) => ({
                  value: key,
                  label: key,
                }))
              }
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

      {loading ? (
        <div className="text-center mt-5">
          <Loading />
        </div>
      ) : error ? (
        <div className="text-center mt-5">
          <p>{error}</p>
        </div>
      ) : Object.keys(curData).length === 0 ? (
        <div className="text-center ">
          <Loading />
          <p>No images found.</p>
        </div>
      ) : (
        Object.entries(curData).map(([key, value], index) => (
          <ImagesWrapper
            key={key}
            date={value.date}
            event_id={value.event_id}
            images={value.images}
            event_name={value.event_name}
          />
        ))
      )}
    </motion.div>
  );
};

export default GalleryPage;
