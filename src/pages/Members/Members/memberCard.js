import React from "react";
import "./membercard.css";
import { CiMail } from "react-icons/ci";
import { Image } from "react-bootstrap";

const MemberCard = ({ src, name, desig, email }) => {
  return (
    <div className="member-card rounded-4 mt-3  d-flex flex-column align-items-center">
      <Image
        src={src}
        alt=""
        onError={(e) => {
          e.target.src =
            "https://pics.craiyon.com/2023-11-12/M_7ojaHCTXmd9X5a76Nl2w.webp";
          e.target.onError = null;
        }}
        className="member-img img-fluid object-fit-cover  mt-2 rounded-2"
        style={{ aspectRatio: 1, width: "65%", objectPosition: "0  -0%" }}
      />
      <div className="w-100 mx-1 mt-2 text-center">
        <h5 className="ff-p text-blue">{name}</h5>
        <h6 className="  ff-p text-blue-light">{desig}</h6>
        <p className="ff-p bg-blue text-light p-1 rounded-4 px-2 c-pointer">
          <CiMail size={20} className="me-2" />
          {email}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
