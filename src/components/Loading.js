import React from "react";
import { load } from "../assets/home";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={load} alt="Loading..." />
    </div>
  );
};

export default Loading;
