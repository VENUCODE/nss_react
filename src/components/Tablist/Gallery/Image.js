import React from "react";

const Image = ({ pic, caption, link }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-2">
      <figure
        className="imghvr-hinge-down rounded-3 shadow "
        style={{ height: "180px", objectFit: "cover" }}
      >
        <img src={pic} alt={caption} className="img-fluid" />
        <figcaption
          className={`imghvr-hinge-up d-flex justify-content-center align-items-center gap-2 flex-column ${
            Math.random() < 0.5
              ? "bg-danger"
              : Math.random() < 0.75
              ? "bg-dark"
              : "bg-primary"
          }`}
        >
          <h3 className="ih-fade-down ih-delay-sm ">{caption}</h3>

          <span className="d-block btn btn-outline-light rounded-0">
            Know more
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export default Image;
