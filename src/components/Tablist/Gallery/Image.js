import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Image = ({ pic, caption, link }) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
      <figure
        className="imghvr-hinge-down rounded-3 shadow "
        style={{ height: "180px", objectFit: "cover" }}
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
          <h3 className="ih-fade-down ih-delay-sm  text-capitalize">
            {caption}
          </h3>

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
