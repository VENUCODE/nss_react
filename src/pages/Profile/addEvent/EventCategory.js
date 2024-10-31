import React, { useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import useAddEvent from "../../../contexts/useAddEvent";

const EventCategory = ({ formData, setFormData, clearForm }) => {
  const { eventCategories } = useAddEvent();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      category: { value: selectedCategory },
    }));
  };

  return (
    <FormControl
      variant="outlined"
      required
      size="small"
      className="col-md-6 col-12 pe-md-2"
    >
      <InputLabel id="event-category-label">Select Event Category</InputLabel>
      <Select
        required
        labelId="event-category-label"
        value={formData.category ? formData.category.value : ""}
        onChange={handleCategoryChange}
        label="Select Event Category"
        className="ff-p"
      >
        <MenuItem value="">
          <em>Select Event Category</em>
        </MenuItem>
        {eventCategories.map((category) => (
          <MenuItem
            key={category.ec_id}
            className="text-capitalize ff-p fs-6 text-muted"
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
