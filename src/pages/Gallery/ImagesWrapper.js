import React, { useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Image } from "antd";
import { hosturl } from "../../api";
import Box from "@mui/material/Box";
import { FaClock } from "react-icons/fa";

const ImagesWrapper = ({ event_name, event_id, images, date }) => {
  useEffect(() => {
    console.log(images);
  }, [images]);

  // Function to handle responsive cols based on window size
  const getCols = () => {
    if (window.innerWidth < 480) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 1100) {
      return 3;
    }
    return 4; // Default
  };

  return (
    <div className="mt-2">
      <div className="w-100 my-2">
        <span className="w-50 ff-p fs-4 fw-bold bg-blue text-white text-capitalize  px-4 py-2 rounded-3">
          {event_name}
        </span>
        <span className="mx-2 bg-blue-pale h-100 ff-p fs-5 p-2 rounded-3 gap-2">
          <FaClock className="text-blue-light me-2" />
          {new Date(date).toLocaleDateString()}
        </span>
      </div>
      <ImageList
        sx={{
          width: "100%",
          height: "auto",
          marginBottom: 2,
        }}
        cols={getCols()}
        rowHeight={164}
      >
        {images?.map((image, id) => (
          <ImageListItem key={id}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={hosturl + image}
                alt={`Event ${event_id} - Photo ${id + 1}`}
                className="img-fluid card col-md-4 col-lg-3  col-6 flex-grow-1"
                style={{
                  height: "150px",
                  width: "100%",
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImagesWrapper;
