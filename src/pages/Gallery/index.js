import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";
import ImagesWrapper from "./ImagesWrapper";
import axios from "axios";
import { hosturl, links } from "../../api";

const GalleryPage = () => {
  const [groupedImages, setGroupedImages] = useState({});

  const getPhotos = async () => {
    try {
      const res = await axios.get(hosturl + links.getEventImages);
      if (res.status !== 200) {
        throw new Error("Failed to get images");
      }

      // Group images by event_id
      const grouped = res.data.reduce((acc, image) => {
        if (!acc[image.event_id]) {
          acc[image.event_id] = [];
        }
        acc[image.event_id].push(image);
        return acc;
      }, {});

      const sortedGrouped = Object.fromEntries(
        Object.keys(grouped)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .map((eventId) => [
            eventId,
            grouped[eventId].sort(
              (a, b) => new Date(b.uploaded_on) - new Date(a.uploaded_on)
            ),
          ])
      );

      setGroupedImages(sortedGrouped);
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
      <div>
        {Object.entries(groupedImages).map(([eventId, images]) => (
          <div key={eventId} className="event-section">
            <ImagesWrapper images={images} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GalleryPage;
