import React, { useState, useEffect } from "react";
import { AutoComplete, Input, Button, Divider, Tag, message, Spin } from "antd";
import { FaUser } from "react-icons/fa";
import { hosturl, links } from "../../../api";

const getRandomPaleColor = () => {
  const colors = [
    "#f8f0e3",
    "#f0f8e3",
    "#e3f8f0",
    "#e3e8f8",
    "#f8e3f0",
    "#f5f5dc",
    "#faf0e6",
    "#ffe4e1",
    "#f0e68c",
    "#e6e6fa",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const EventAttendees = () => {
  const [members, setMembers] = useState([]);
  const [selectedAttendees, setSelectedAttendees] = useState([]);
  const [currentAttendee, setCurrentAttendee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await fetch(hosturl + links.get_attendees);
        if (!response.ok) throw new Error("Failed to fetch attendees");

        const data = await response.json();
        const formattedData = data.map((attendee) => ({
          label: attendee.user_name,
          value: attendee.user_name,
          user_id: attendee.user_id,
        }));
        setMembers(formattedData);
      } catch (error) {
        message.error("Error fetching attendees: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendees();
  }, []);

  const removeAttendee = (user_id) => {
    setSelectedAttendees((prev) =>
      prev.filter((attendee) => attendee.user_id !== user_id)
    );
  };

  const handleClear = () => {
    setSelectedAttendees([]);
  };

  if (loading) {
    return <Spin size="large" className="d-flex justify-content-center p-5" />;
  }

  return (
    <div className="bg-white container">
      <div className="d-flex container">
        <AutoComplete
          options={members}
          disabled={!currentAttendee}
          value={currentAttendee}
          onSelect={(value, option) => {
            if (
              !selectedAttendees.some(
                (attendee) => attendee.user_id === option.user_id
              )
            ) {
              setSelectedAttendees((prev) => [option, ...prev]);
            } else {
              message.info(`${option.label} already selected`, 1);
            }
            setCurrentAttendee(null);
          }}
          onChange={(value) => setCurrentAttendee(value)}
          style={{ flex: 1 }}
        >
          <Input
            placeholder="Select Attendee"
            className="rounded-0"
            prefix={<FaUser />}
            onPressEnter={() => setCurrentAttendee(null)}
          />
        </AutoComplete>
        <Button
          type="primary"
          className="rounded-0"
          onClick={handleClear}
          disabled={!selectedAttendees.length}
        >
          Clear All
        </Button>
      </div>

      <Divider orientation="left" orientationMargin={0} className=" ff-p">
        {selectedAttendees.length > 0 ? (
          <span className="poppins-medium text-blue">Selected Attendees</span>
        ) : (
          <span className="poppins-medium text-red">No Attendees found</span>
        )}
      </Divider>
    </div>
  );
};

export default EventAttendees;
