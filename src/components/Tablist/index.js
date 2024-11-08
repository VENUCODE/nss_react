import React from "react";
import "./index.css";
import Gallery from "./Gallery";
import Events from "./Events";

const Tablist = () => {
  return (
    <div className=" container-fluid celeb py-3">
      <div className="dvh100">
        <h3 className="heading ff-p ">
          <p className="d-inline fs-1">✨</p>
          <span>Captured Moments </span>
        </h3>
        <Gallery />
      </div>
      <div className="dvh100">
        <h3 className="heading  ff-p">
          <p className="d-inline fs-1">🎉</p>
          <span>Moments that Matter</span>
        </h3>
        <Events />
      </div>
    </div>
  );
};

export default Tablist;
