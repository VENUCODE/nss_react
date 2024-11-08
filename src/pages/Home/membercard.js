import React from "react";
import "./membercard.css";

const MemberCardHome = () => {
  return (
    <div className="position-relative mx-3">
      <div className="img-container">
        <img
          alt="imgage"
          className="img-fluid  border border-3 border-light"
          style={{
            height: "200px",
            aspectRatio: "1",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "0rem 0rem 50% 50% ",
          }}
          src="https://images.unsplash.com/photo-1613483812364-896455b2b309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        />
        <div className="bg-white text-center py-2 rounded-3 shadow ff-p position-relative outer-div">
          Name
        </div>
      </div>
    </div>
  );
};

export default MemberCardHome;
