import React, { useState } from "react";
import ImgCrop from "antd-img-crop";
import { Upload, Modal, Image, message, Divider } from "antd";
import { LuImagePlus } from "react-icons/lu";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const CroppedImage = ({ fileList, setFileList, ...props }) => {
  // const [fileList, setFileList] = useState([]);
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

  const handleChange = async ({ fileList: newFileList }) => {
    const updatedFileList = await Promise.all(
      newFileList.map(async (file) => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        return file;
      })
    );
    setFileList(updatedFileList);
  };

  const handleRemove = (file) => {
    const updatedFileList = fileList.filter((item) => item.uid !== file.uid);
    setFileList(updatedFileList);
    message.success(`${file.name} removed successfully.`);
  };

  return (
    <div className={props.className}>
      <Divider orientation="center">Upload new Banner images</Divider>
      <ImgCrop
        cropShape="rect"
        aspectSlider={false}
        rotationSlider={true}
        aspect={2.5}
        zoomSlider={true}
        showReset={true}
        modalTitle="Crop image"
      >
        <Upload
          className="d-flex flex-column align-items-center mb-4"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={handleRemove}
          beforeUpload={() => false}
        >
          <div className="text-center bg-warning-subtle px-2  py-2 rounded-1">
            <p className="">
              <LuImagePlus size={30} />
            </p>
            <p
              className="ff-p text-muted"
              style={{ fontSize: "clamp(0.6rem,0.7rem,0.8rem)" }}
            >
              Upload Image
            </p>
          </div>
        </Upload>
      </ImgCrop>

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

export default CroppedImage;
