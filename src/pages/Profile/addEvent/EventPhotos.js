import React, { useState } from "react";
import ImageUpload from "../../../components/Helper/ImageUpload";
import { Button } from "antd";

const EventPhotos = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  return (
    <div className="container-fluid">
      <Button
        className="float-end"
        onClick={() => {
          setSelectedFiles(null);
        }}
      >
        Clear All
      </Button>
      <ImageUpload
        class="col-12 gap-2 "
        eventPhotos={selectedFiles}
        setEventPhotos={setSelectedFiles}
      />
    </div>
  );
};

export default EventPhotos;
