import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import useAddEvent from "../../../contexts/useAddEvent";

const EventCategory = ({ formData, setFormData }) => {
  const { eventCategories } = useAddEvent();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory === "") {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      category: { value: selectedCategory },
    }));
  };

  return (
    <FormControl fullWidth variant="outlined" required size="small">
      <InputLabel id="event-category-label">Select Event Category</InputLabel>
      <Select
        labelId="event-category-label"
        value={formData.category ? formData.category.value : ""}
        onChange={handleCategoryChange}
        label="Select Event Category"
      >
        <MenuItem value="">
          <em>Select Event Category</em>
        </MenuItem>
        {eventCategories.map((category) => (
          <MenuItem
            key={category.ec_id}
            className="text-capitalize ff-p text-muted"
            value={category.ec_id}
          >
            {category.ec_name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EventCategory;
