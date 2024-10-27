import React, { useEffect, useState } from "react";
import { Form, Input, DatePicker, Select } from "antd";
import ImageUpload from "../Helper/ImageUpload";

const { Option } = Select;

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [form] = Form.useForm();
  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div className="dvh100 container-fluid">
      <Form form={form} layout="vertical" className="form-container">
        <Form.Item
          label="Event Category"
          name="eventCategory"
          rules={[
            { required: true, message: "Please select an event category!" },
          ]}
        >
          <Select placeholder="Select event category">
            <Option value="music">Music</Option>
            <Option value="sports">Sports</Option>
            <Option value="conference">Conference</Option>
            <Option value="workshop">Workshop</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Hosted On"
          name="hostedOn"
          rules={[
            { required: true, message: "Please select the hosted date!" },
          ]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please input the location!" }]}
        >
          <Input placeholder="Enter location" />
        </Form.Item>
      </Form>

      <ImageUpload
        eventPhotos={selectedFiles}
        setEventPhotos={setSelectedFiles}
      />
    </div>
  );
};

export default FileUpload;
