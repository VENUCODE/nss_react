import React, { useState } from "react";
import "./index.css";
import Gallery from "./Gallery";
import Events from "./Events";
import Members from "../../pages/Home/Members";
import { Segmented } from "antd";
import { GrGallery } from "react-icons/gr";
import { RiCalendarEventLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";

const Tablist = () => {
  const [activeTab, setActiveTab] = useState("Gallery");

  return (
    <div className=" section dvh100 mt-4">
      {" "}
      <div className="container-fluid px-2">
        {" "}
        <Segmented
          className="py-3 gap-2 ff-p fs-6 px-3 custom-segmented "
          onChange={(data) => {
            console.log(data);
            setActiveTab(data);
          }}
          options={[
            { label: "Gallery", value: "Gallery", icon: <GrGallery /> },
            { label: "Events", value: "Events", icon: <RiCalendarEventLine /> },
          ]}
          block
        />
      </div>{" "}
      <div className="container-fluid">
        {activeTab === "Gallery" && <Gallery />}
        {activeTab === "Events" && <Events />}
      </div>{" "}
    </div>
  );
};

export default Tablist;
