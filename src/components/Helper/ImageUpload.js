import React, { useEffect, useState } from "react";
import { Upload, Image, Modal } from "antd";
import { FaInbox } from "react-icons/fa";
import "./upload.css";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ImageUpload = ({
  eventPhotos,
  setEventPhotos,
  limit = null,
  listType = "picture-card",
  ...props
}) => {
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setEventPhotos(fileList);
  };

  useEffect(() => {
    setFileList(eventPhotos);
  }, [eventPhotos]);
  return (
    <div className={"container " + props.class}>
      <Upload.Dragger
        listType={listType}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple={limit ? false : true}
        maxCount={limit}
      >
        <>
          <p className="ant-upload-drag-icon">
            <FaInbox />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </>
      </Upload.Dragger>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <Image src={previewImage} alt="Preview" width="100%" />
      </Modal>
    </div>
  );
};

export default ImageUpload;
