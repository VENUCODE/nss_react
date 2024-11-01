import React, { useState, useEffect, useCallback } from "react";
import { Select, Button, Tag, message } from "antd";
import { hosturl, links } from "../../../api";

const { Option } = Select;

const EventAttendees = ({ formData, setFormData, clearForm }) => {
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

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      attendees: [
        ...selectedAttendees.map((i) => {
          return i.value;
        }),
      ],
    }));
  }, [selectedAttendees, setFormData]);

  const handleSelectAttendee = (value) => {
    const selected = originalMembers.find((member) => member.value === value);
    if (
      selected &&
      !selectedAttendees.some((attendee) => attendee.value === selected.value)
    ) {
      setSelectedAttendees((prev) => [...prev, selected]);

      setMembers((prev) => prev.filter((member) => member.value !== value));
    }
  };

  const removeAttendee = (user_id) => {
    setSelectedAttendees((prev) =>
      prev.filter((attendee) => attendee.value !== user_id)
    );

    const removedAttendee = originalMembers.find(
      (member) => member.value === user_id
    );
    if (removedAttendee) {
      setMembers((prev) => [...prev, removedAttendee]);
    }
  };

  const handleClear = useCallback(() => {
    setSelectedAttendees([]);
    setMembers(originalMembers);
  }, [originalMembers, setSelectedAttendees, setMembers]);

  useEffect(() => {
    if (clearForm) {
      handleClear();
    }
  }, [clearForm, handleClear]);
  return (
    <div className="container-fluid shadow py-3 bg-white rounded-3">
      <div className="d-flex container gap-2 flex-row flex-wrap">
        <Select
          placeholder="Select Attendee"
          className="flex-grow-1 flex-fill"
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
          className="rounded-0 bg-warning flex-grow-1"
          onClick={handleClear}
          disabled={selectedAttendees.length === 0}
        >
          Clear All
        </Button>
        <Button
          type="primary"
          className="rounded-0 flex-grow-1"
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
      {selectedAttendees.length === 0 && (
        <span className="container text-red ff-p pt-4 fs-6">
          No attendees selected
        </span>
      )}
    </div>
  );
};

export default EventAttendees;
