import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Card, Col, Row, Image, Typography, Divider } from "antd";
import { Avatar, Chip } from "@mui/material";
import useEvents from "../../contexts/useEvents";

const { Title, Text } = Typography;
const SingleEvent = () => {
  const { events } = useEvents();
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  useEffect(() => {
    if (events) {
      setEvent(events.filter((ev) => ev.ec_id === eventId)[0]);
    }
  }, [eventId, events]);
  return (
    <Card style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Title level={2}>{event?.event_name}</Title>
          <Title level={4} type="secondary">
            {event?.ec_name}
          </Title>
        </Col>
        <Col span={24}>
          <Divider />
        </Col>
        <Col span={12}>
          <Text strong>Date:</Text>{" "}
          <Text>
            {event?.hosted_on
              ? new Date(event?.hosted_on).toDateString()
              : "Date not available"}
          </Text>
        </Col>
        <Col span={12}>
          <Text strong>Location:</Text>{" "}
          <Text>{event?.location || "Location not specified"}</Text>
        </Col>
        <Col span={24}>
          <Divider />
          <Text strong>Attendees:</Text>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {event?.attendees && event?.attendees.length > 0 ? (
              event?.attendees.map((attendee, index) => (
                <Chip
                  key={index}
                  label={`Attendee ${attendee}`}
                  avatar={<Avatar>{attendee}</Avatar>}
                />
              ))
            ) : (
              <Text>No attendees</Text>
            )}
          </div>
        </Col>
        <Col span={24}>
          <Divider />
          <Text strong>Photos:</Text>
          <Row gutter={[8, 8]} style={{ marginTop: "10px" }}>
            {Array.isArray(event?.photo_urls) &&
            event?.photo_urls.length > 0 ? (
              event?.photo_urls.map((url, index) => (
                <Col key={index} xs={12} sm={8} md={6}>
                  <Image
                    src={url}
                    alt={`Event photo ${index + 1}`}
                    style={{ borderRadius: "5px" }}
                    width="100%"
                    height="100px"
                  />
                </Col>
              ))
            ) : (
              <Text>No photos available</Text>
            )}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default SingleEvent;
