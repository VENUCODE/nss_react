import React from "react";
import { Skeleton } from "antd";

const PlaceHolder = () => {
  return (
    <div className=" card mx-1 bg-blue">
      <Skeleton.Image active style={{ width: "100%", height: "150px" }} />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Skeleton.Input active style={{ width: "80%", height: "40px" }} />
    </div>
  );
};

export default PlaceHolder;
