import React from "react";
import MemberCard from "./memberCard";
const Members = () => {
  return (
    <div className="container-fluid">
      <div className=" gap-3 d-flex flex-row">
        {[1, 2, 3, 4].map((i) => {
          return <MemberCard key={i} />;
        })}
      </div>
    </div>
  );
};

export default Members;
