import React, { useState } from "react";
import CroppedImage from "../../../components/Helper/CroppedImage";
import { Button, Divider, message } from "antd";
import useUser from "../../../contexts/userContext";

const AddBannerImages = () => {
  const [files, setFiles] = useState([]);
  const { BannerImages, addBannerImages } = useUser();
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    const res = await addBannerImages(files);
    if (res.status) {
      message.success(res.message);
    } else {
      message.error(res.message);
    }
    setFiles([]);
  };
  return (
    <div className="dvh100 container-fluid">
      <div className="container fluid">
        <Divider orientation="center">Current Banner images</Divider>
        <div></div>
      </div>
      <div className="container">
        <CroppedImage fileList={files} setFileList={setFiles} />
      </div>
      <div className="text-center">
        <Button
          variant="filled"
          color="primary"
          disabled={files.length === 0}
          onClick={handleUpload}
        >
          {" "}
          Upload images
        </Button>
      </div>
    </div>
  );
};

export default AddBannerImages;
