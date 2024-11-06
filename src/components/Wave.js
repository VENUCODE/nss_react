import React from "react";
import { Random as WText } from "react-animated-text";
const Wave = ({ text = "some text" }) => {
  return (
    <>
      <WText text={text} effectDirection="up" />
    </>
  );
};

export default Wave;
