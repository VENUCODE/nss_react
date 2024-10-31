import { Box, TextField } from "@mui/material";
import EventCategory from "./EventCategory";

const EventDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box className="col-12  px-md-4 py-4  px-2  bg-white  rounded-3">
      <TextField
        label="Event name"
        name="event_name"
        value={formData.event_name}
        onChange={handleChange}
        fullWidth
        required
        size="small"
        variant="outlined"
        margin="normal"
        sx={{ fontSize: "0.9rem", "& .MuiInputLabel-root": { color: "#555" } }}
      />
      <EventCategory setFormData={setFormData} formData={formData} />
      <TextField
        id="date"
        type="date"
        label="Held on"
        name="hosted_on"
        value={formData.hosted_on}
        onChange={handleChange}
        fullWidth
        required
        size="small"
        variant="outlined"
        margin="normal"
        sx={{ fontSize: "0.9rem", "& .MuiInputLabel-root": { color: "#555" } }}
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
