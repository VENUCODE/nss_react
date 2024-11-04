import React from "react";
import Masonry from "react-masonry-css";
import ImageCard from "./ImageCard";
import { hosturl } from "../../api";
import "./imageGrid.css";
const ImagesWrapper = ({ images }) => {
  // Set breakpoints for responsive columns
  const breakpoints = {
    default: 4, // 4 columns for large screens
    1100: 3, // 3 columns for medium screens
    768: 2, // 2 columns for tablets
    480: 1, // 1 column for mobile screens
  };

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid "
      columnClassName="my-masonry-grid_column"
    >
      {images?.map((image, id) => (
        <ImageCard
          key={id}
          src={
            hosturl + image.photo_url ||
            `https://picsum.photos/seed/${id + 1}/picsum/200/300`
          }
          alt={image.event_id + " event photo number " + id}
        />
      ))}
    </Masonry>
  );
};

export default ImagesWrapper;
