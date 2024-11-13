import React from "react";
import "./membercard.css";
import { hosturl } from "../../api";
import { Image } from "antd";

const MemberCardHome = ({ data }) => {
  return (
    <div className="position-relative mx-3">
      <div className="img-container">
        <Image
          alt="imgage"
          className="img-fluid  border border-3 border-light "
          style={{
            height: "200px",
            aspectRatio: "1",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "50%",
          }}
          src={hosturl + data.profile_photo}
          onError={(e) => {
            e.target.src =
              "https://pics.craiyon.com/2023-11-12/M_7ojaHCTXmd9X5a76Nl2w.webp";
            e.target.onError = null;
          }}
        />
        <div className="bg-white text-center py-2 rounded-3 shadow ff-p position-relative outer-div text-ellipis text-capitalize">
          {data.user_name}
        </div>
      </div>
    </div>
  );
};

export default MemberCardHome;
