import React from "react";
import { p1 } from "../../../assets/home";
import "./membercard.css";
const MemberCard = () => {
  return (
    <div className="member-card rounded-4 mt-5 d-flex flex-column align-items-center">
      <img
        src={p1}
        alt=""
        className="member-img img-fluid object-fit-cover  mt-2 rounded-2"
        style={{ aspectRatio: 1, width: "65%" }}
      />
      <div className="w-100 mx-1 mt-2 text-center">
        <h5 className="ff-p text-blue">Name</h5>
        <h6 className="  ff-p text-blue-light">Designation</h6>
        <p className="text-red ff-p text-capitalize">designated title</p>
      </div>
    </div>
  );
};

export default MemberCard;
