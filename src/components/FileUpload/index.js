import React, { useState } from "react";
import { hosturl, links } from "../../api";
import { message } from "antd";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleUpload = async (e) => {
    if (!selectedFiles) return;

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("file", selectedFiles[i]);
    }
    try {
      const res = await fetch(hosturl + links.eventUpload, {
        method: "POST",
        body: formData,
      });
      const response = await res.json();
      if (!res.ok) {
        throw new Error(response.error);
      }
      console.log(response);
      message.success("File uploaded successfully");
      setUploadedFiles([response.filename]);
    } catch (e) {
      message.error(e.message, 2);
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFiles}>
        Upload Files
      </button>
      <div className="container row">
        {uploadedFiles.map((file, index) => (
          <divc className="col-4" key={index}>
            <img
              className="img-fluid"
              src={hosturl + file}
              alt={`uploaded file ${index}`}
            />
          </divc>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
