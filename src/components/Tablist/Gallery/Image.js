import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Image = ({ pic, caption, link }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <figure
        className="imghvr-hinge-down rounded-3 shadow mt-2"
        style={{ height: "100%", objectFit: "cover" }}
      >
        <img
          src={pic}
          alt={caption}
          className="img-fluid h-100 w-100 object-fit-cover"
        />
        <figcaption
          className={`imghvr-hinge-up d-flex justify-content-center align-items-center gap-2 flex-column ${
            Math.random() < 0.5
              ? "bg-danger"
              : Math.random() < 0.75
              ? "bg-dark"
              : "bg-primary"
          }`}
        >
          <h5 className="ih-fade-down ih-delay-sm  ff-p text-capitalize">
            {caption}
          </h5>

          <span
            onClick={() => {
              navigate(link);
            }}
            className="c-pointer d-block btn btn-outline-light rounded-0"
          >
            Know more
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Image;
