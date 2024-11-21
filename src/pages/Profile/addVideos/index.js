import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button as AntdButton, Space } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const AddEventVideos = ({ formData, setFormData }) => {
  const [videos, setVideos] = useState(formData.videos || []);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (index, field, value) => {
    const updatedVideos = [...videos];
    updatedVideos[index] = { ...updatedVideos[index], [field]: value };
    setVideos(updatedVideos);
    setFormData({ ...formData, videos: updatedVideos });
  };

  const addVideo = () => {
    setVideos([...videos, { title: "", videoUrl: "" }]);
  };

  const removeVideo = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
    setFormData({ ...formData, videos: updatedVideos });
  };

  const validateForm = () => {
    const errors = {};
    videos.forEach((video, index) => {
      if (!video.title) {
        errors[`title_${index}`] = "Title is required";
      }
      if (!video.videoUrl) {
        errors[`videoUrl_${index}`] = "Video URL is required";
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="container">
      {videos.map((video, index) => (
        <div
          key={index}
          className="card mb-3 shadow-sm p-3"
          style={{ borderRadius: "8px" }}
        >
          <div className="row align-items-center gap-3">
            <div className="col-md-5 col-12">
              <TextField
                fullWidth
                label="Video Title"
                variant="outlined"
                value={video.title}
                onChange={(e) =>
                  handleInputChange(index, "title", e.target.value)
                }
                error={!!formErrors[`title_${index}`]}
                helperText={formErrors[`title_${index}`] || ""}
                style={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: "5px",
                }}
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
                inputProps={{
                  style: { padding: "10px", fontSize: "14px" },
                }}
              />
            </div>
            <div className="col-md-5 col-12">
              <TextField
                fullWidth
                label="Video URL"
                variant="outlined"
                value={video.videoUrl}
                onChange={(e) =>
                  handleInputChange(index, "videoUrl", e.target.value)
                }
                error={!!formErrors[`videoUrl_${index}`]}
                helperText={formErrors[`videoUrl_${index}`] || ""}
                style={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: "5px",
                }}
                InputLabelProps={{
                  style: { fontSize: "14px" },
                }}
                inputProps={{
                  style: { padding: "10px", fontSize: "14px" },
                }}
              />
            </div>
            <div className="col-md-2 col-12 text-center">
              <AntdButton
                danger
                icon={<DeleteOutlined />}
                onClick={() => removeVideo(index)}
              >
                Remove
              </AntdButton>
            </div>
          </div>
        </div>
      ))}
      <Space size="middle" className="d-flex justify-content-between mt-3">
        <AntdButton
          variant="outlined"
          color="success"
          icon={<PlusOutlined />}
          onClick={addVideo}
        >
          Add Video
        </AntdButton>
      </Space>
    </div>
  );
};

export default AddEventVideos;
