import React, { useState } from "react";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";

const EventDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    hosted_on: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="col-md-10 ">
      <TextField
        label="Event name"
        name="event_name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        size="small"
        variant="outlined"
        margin="normal"
        sx={{ fontSize: "0.9rem", "& .MuiInputLabel-root": { color: "#555" } }}
      />
      <TextField
        select
        label="Event Category"
        name="event_category"
        value={formData.category}
        onChange={handleChange}
        fullWidth
        required
        size="small"
        variant="outlined"
        margin="normal"
        sx={{
          fontSize: "0.9rem",
          "& .MuiInputLabel-root": { color: "#555" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#bbb" },
            "&:hover fieldset": { borderColor: "#888" },
          },
        }}
      >
        <MenuItem value="Category 1">Category 1</MenuItem>
        <MenuItem value="Category 2">Category 2</MenuItem>
      </TextField>
      <TextField
        id="date"
        label="Hosted on"
        type="date"
        name="hosted_on"
        value={formData.hosted_on}
        onChange={handleChange}
        fullWidth
        required
        size="small"
        variant="outlined"
        margin="normal"
        sx={{ fontSize: "0.9rem", "& .MuiInputLabel-root": { color: "#555" } }}
        InputLabelProps={{ shrink: true }}
      />{" "}
      <TextField
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        fullWidth
        required
        size="small"
        variant="outlined"
        margin="normal"
        sx={{ fontSize: "0.9rem", "& .MuiInputLabel-root": { color: "#555" } }}
      />
      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        size="small"
        variant="outlined"
        margin="normal"
        sx={{ fontSize: "0.9rem", "& .MuiInputLabel-root": { color: "#555" } }}
      />
    </Box>
  );
};

export default EventDetails;
