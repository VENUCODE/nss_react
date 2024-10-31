import React, { useEffect, useState } from "react";
import ImageUpload from "../../../components/Helper/ImageUpload";
import { Button } from "antd";
import { FaTrash } from "react-icons/fa";

const EventPhotos = ({ formData, setFormData }) => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  useEffect(() => {
    if (selectedFiles && selectedFiles.length > 0) {
      setFormData((prev) => ({ ...prev, images: [...selectedFiles] }));
    } else {
      setFormData((prev) => {
        const { images, ...rest } = prev;
        return { ...rest };
      });
    }
    // console.log(formData.images);
  }, [selectedFiles, setFormData]);
  return (
    <div className="container-fluid justify-content-center bg-white py-3 rounded-3 d-flex flex-column">
      <ImageUpload
        className="col-md-10 col-12 gap-2"
        eventPhotos={selectedFiles}
        setEventPhotos={setSelectedFiles}
      />
      <Button
        icon={<FaTrash />}
        className="shadow text-white mx-auto"
        style={{ backgroundColor: "rgb(255,70,0)" }}
        onClick={() => {
          setSelectedFiles(null);
        }}
      >
        Clear all photos
      </Button>
    </div>
  );
};

export default EventPhotos;
