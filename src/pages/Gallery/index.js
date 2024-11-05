import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";
import ImagesWrapper from "./ImagesWrapper";
import axios from "axios";
import { hosturl, links } from "../../api";
const paleColors = [
  "#C9E4CA80",
  "#F7D2C480",
  "#C5CAE980",
  "#F2C46480",
  "#C7B8EA80",
  "#87CEEB80",
  "#FFC08080",
  "#C9E4CA80",
  "#6495ED80",
  "#DC143C80",
];
const GalleryPage = () => {
  const [groupedImages, setGroupedImages] = useState({});

  const getPhotos = async () => {
    try {
      const res = await axios.get(hosturl + "/geteventphotos");
      if (res.status !== 200) {
        throw new Error("Failed to get images");
      }
      const data = Object.entries(res.data).map((val) => val[1]);
      const accum = data.reduce((acc, val) => {
        if (!acc[val.event_name]) {
          acc[val.event_name] = {
            event_id: val.event_id,
            event_name: val.event_name,
            images: [val.photo_url],
          };
        } else {
          acc[val.event_name].images.push(val.photo_url);
        }
        return acc;
      }, {});
      setGroupedImages(accum);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100 container-fluid"
    >
      <pre>
        {Object.entries(groupedImages).map(([key, value], index) => (
          <ImagesWrapper
            key={key}
            event_id={value.event_id}
            images={value.images}
            event_name={value.event_name}
          />
        ))}
      </pre>
    </motion.div>
  );
};

export default GalleryPage;
