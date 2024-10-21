import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Gallery from "./Gallery";
import Events from "./Events";
import Members from "./Members";

const Tablist = () => {
  const tabs = [
    { id: 1, name: "Gallery" },
    { id: 2, name: "Events" },
    { id: 3, name: "Members" },
  ];
  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (id) => {
    setActiveTab(id);
  };
  return (
    <div className="dvh100">
      <div>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => handleTabChange(k)}
          className="w-100"
        >
          {tabs.map((tab) => (
            <Tab
              eventKey={tab.id}
              title={tab.name}
              key={tab.id}
              style={{ width: "12ch !important" }}
            />
          ))}
        </Tabs>
      </div>
      <div className="container">
        {activeTab === 1 && <Gallery />}
        {activeTab === 2 && <Events />}
        {activeTab === 3 && <Members />}
      </div>
    </div>
  );
};

export default Tablist;
