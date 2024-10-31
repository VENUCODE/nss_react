import React, { useState, useEffect } from "react";
import { Select, Button, Tag, message } from "antd";
import { hosturl, links } from "../../../api";

const { Option } = Select;

const EventAttendees = ({ formData, setFormData }) => {
  const [members, setMembers] = useState([]);
  const [originalMembers, setOriginalMembers] = useState([]);
  const [selectedAttendees, setSelectedAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchAttendees = async () => {
      setLoading(true);
      try {
        const response = await fetch(hosturl + links.get_attendees);
        if (!response.ok) throw new Error("Failed to fetch attendees");

        const data = await response.json();
        const formattedData = data.map((attendee) => ({
          label: attendee.user_name, // user_name for display
          value: attendee.user_id, // user_id for value
        }));
        setMembers(formattedData);
        setOriginalMembers(formattedData); // Store the original members
      } catch (error) {
        message.error("Error fetching attendees: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendees();
  }, [refetch]);

  // Update formData whenever selectedAttendees changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      attendees: [...selectedAttendees],
    }));
  }, [selectedAttendees, setFormData]);

  const handleSelectAttendee = (value) => {
    const selected = originalMembers.find((member) => member.value === value);
    if (
      selected &&
      !selectedAttendees.some((attendee) => attendee.value === selected.value)
    ) {
      setSelectedAttendees((prev) => [...prev, selected]);
      // Remove the selected attendee from the available options
      setMembers((prev) => prev.filter((member) => member.value !== value));
    }
  };

  const removeAttendee = (user_id) => {
    setSelectedAttendees((prev) =>
      prev.filter((attendee) => attendee.value !== user_id)
    );
    // Restore the removed attendee back to the available options
    const removedAttendee = originalMembers.find(
      (member) => member.value === user_id
    );
    if (removedAttendee) {
      setMembers((prev) => [...prev, removedAttendee]);
    }
  };

  const handleClear = () => {
    setSelectedAttendees([]);
    setMembers(originalMembers);
  };
  useEffect(() => {
    console.log(formData.attendees);
  }, [formData.attendees]);

  return (
    <div className="container py-3 bg-white rounded-3">
      <div className="d-flex container gap-2">
        <Select
          placeholder="Select Attendee"
          style={{ flex: 1 }}
          onSelect={handleSelectAttendee}
          allowClear
        >
          {members.map((member) => (
            <Option key={member.value} value={member.value}>
              {member.label}
            </Option>
          ))}
        </Select>
        <Button
          type="primary"
          className="rounded-0 bg-warning"
          onClick={handleClear}
          disabled={selectedAttendees.length === 0}
        >
          Clear All
        </Button>
        <Button
          type="primary"
          className="rounded-0"
          loading={loading}
          onClick={() => setRefetch((prev) => !prev)}
        >
          Refetch
        </Button>
      </div>

      {selectedAttendees.length > 0 && (
        <div className="d-flex flex-wrap mt-3 ms-2">
          {selectedAttendees.map((item) => (
            <Tag
              closable
              key={item.value}
              size="large"
              onClose={() => removeAttendee(item.value)}
              className="m-1 ff-p border border-1 shadow border-black text-capitalize"
            >
              {item.label}
            </Tag>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventAttendees;
