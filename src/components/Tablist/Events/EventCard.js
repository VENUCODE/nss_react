import React from "react";

const EventCard = ({ pic, heading, date }) => {
  return (
    <div className="col-md-4 ">
      <figure className="imghvr-hinge-down ">
        <img src={pic} alt={heading} />
        <figcaption
          className={`imghvr-hinge-up d-flex justify-content-center align-items-center gap-2 flex-column ${
            Math.random() < 0.5
              ? "bg-danger"
              : Math.random() < 0.75
              ? "bg-dark"
              : "bg-primary"
          }`}
        >
          <h3 className="ih-fade-down ih-delay-sm ">{heading}</h3>

          <span className="d-block btn btn-outline-light rounded-0">
            {date}
          </span>
        </figcaption>
      </figure>
    </div>
  );
};

export default EventCard;
