import { Box, TextField, InputAdornment } from "@mui/material";
import EventCategory from "./EventCategory";
import { FaCalendarAlt, FaMapMarkerAlt, FaRegEdit } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const EventDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box className="col-12 px-md-4 py-4 gap-2 px-2 bg-white rounded-3 shadow">
      <div className="m-0 mb-3 p-0 row">
        <TextField
          label="Event name"
          name="event_name"
          value={formData.event_name ?? ""}
          onChange={handleChange}
          className="col-md-6 col-12 pe-md-2"
          required
          size="small"
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MdEvent color="indigo" size={20} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1rem",
              color: "#333",
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#555" },
              "&.Mui-focused fieldset": { borderColor: "#007bff" },
            },
            "& .MuiInputLabel-root": {
              color: "#555",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.9rem",
            },
          }}
        />
        <TextField
          label="Location"
          name="location"
          value={formData.location ?? ""}
          onChange={handleChange}
          className="col-md-6 col-12 ps-md-2"
          required
          size="small"
          variant="outlined"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaMapMarkerAlt color="red" size={15} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1rem",
              color: "#333",
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#555" },
              "&.Mui-focused fieldset": { borderColor: "#007bff" },
            },
            "& .MuiInputLabel-root": {
              color: "#555",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.9rem",
            },
          }}
        />
      </div>
      <div className="row m-0 mb-3 p-0">
        <EventCategory setFormData={setFormData} formData={formData} />
        <TextField
          id="date"
          type="date"
          label="Held on"
          className="col-md-6 col-12 ps-md-2 mt-xs-2 mt-sm-2 mt-md-0 mt-3"
          name="hosted_on"
          value={formData.hosted_on ?? ""}
          onChange={handleChange}
          required
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaCalendarAlt color="gray" />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              fontFamily: "'Poppins', sans-serif",
              fontSize: "1rem",
              color: "#333",
              "& fieldset": { borderColor: "#888" },
              "&:hover fieldset": { borderColor: "#555" },
              "&.Mui-focused fieldset": { borderColor: "#007bff" },
            },
            "& .MuiInputLabel-root": {
              color: "#555",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.9rem",
            },
          }}
        />
      </div>
      <TextField
        label="Description"
        name="description"
        value={formData.description ?? ""}
        onChange={handleChange}
        fullWidth
        multiline
        required
        rows={4}
        size="small"
        variant="outlined"
        margin="normal"
        className="text-muted ff-p"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaRegEdit color="indigo" size={20} />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
            color: "#333",
            "& fieldset": { borderColor: "#888" },
            "&:hover fieldset": { borderColor: "#555" },
            "&.Mui-focused fieldset": { borderColor: "#007bff" },
          },
          "& .MuiInputLabel-root": {
            color: "#555",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "0.9rem",
          },
        }}
      />
    </Box>
  );
};

export default EventDetails;
