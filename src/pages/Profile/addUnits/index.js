import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import {
  UploadOutlined,
  SendOutlined,
  LoadingOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Upload,
  Typography,
  Row,
  Col,
  message,
  Collapse,
} from "antd";
import "./index.css";
import { FaFileCsv } from "react-icons/fa";
import CSVViewer from "./CSVViewer";
import useUser from "../../../contexts/userContext";
import { hosturl, links } from "../../../api";
import AvailableUnits from "./AvailableUnits";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const AddUnits = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);
  const { authToken } = useUser();

  const { mutate, isLoading, isError } = useMutation({
    mutationKey: ["addNewEvent"],
    mutationFn: async () => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      const response = await axios.post(hosturl + links.add_unit, formData, {
        headers: { Authorization: authToken },
      });
      return response.data;
    },
    onSuccess: () => {
      message.success("Data sent successfully!");
      setFile(null);
      setTitle("");
      refetchUnits();
    },
    onError: (error) => {
      setError(error.message);
      message.error("Failed to send data.");
    },
  });

  const handleFileChange = ({ file }) => {
    console.log(file);
    setFile(file);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    console.log(file, title);
    if (!file || !title) {
      message.warning("Please fill in all fields!");
      return;
    }
    mutate();
  };
  const {
    data: unitData,
    isLoading: isLoadingUnits,
    error: isLoadingError,
    refetch: refetchUnits,
  } = useQuery({
    queryKey: ["getting units"],
    queryFn: async () => {
      const response = await fetch(hosturl + links.getunits);
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchInterval: 10000,
  });

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      className="dvh100"
    >
      <Row justify="center" className="">
        <Col xs={24}>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} size={20} />
            )}
            className="site-collapse-custom-collapse shadow"
          >
            <Panel
              header={
                <Title level={4} className="ff-p text-blue">
                  Add unit data
                </Title>
              }
              key="1"
            >
              <div className="p-4 border rounded shadow-sm">
                <Form layout="vertical" onFinish={handleSubmit}>
                  <Form.Item
                    label={<Text strong>Upload unit csv file</Text>}
                    name="file"
                    rules={[
                      { required: true, message: "Please upload a file!" },
                    ]}
                  >
                    <Upload.Dragger
                      accept=".csv,.xls"
                      beforeUpload={() => false}
                      onChange={handleFileChange}
                      maxCount={1}
                      className="ff-p"
                      height={"10rem"}
                    >
                      <FaFileCsv className="text-success" size={30} /> Drag or
                      Upload unit data
                    </Upload.Dragger>
                  </Form.Item>

                  <Form.Item
                    label={
                      <Text strong className="ff-p">
                        Enter Title of the unit
                      </Text>
                    }
                    name="title"
                    rules={[
                      { required: true, message: "Please enter a title!" },
                      {
                        max: 100,
                        message: "Title cannot exceed 50 characters!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Title of the units"
                      value={title}
                      onChange={handleTitleChange}
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      icon={isLoading ? <LoadingOutlined /> : <SendOutlined />}
                      loading={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send"}
                    </Button>
                  </Form.Item>

                  {isError && (
                    <Text type="danger" className="text-center">
                      {error}
                    </Text>
                  )}
                </Form>
              </div>
            </Panel>
          </Collapse>
        </Col>
      </Row>
      <div className="container-fluid">
        <AvailableUnits
          data={unitData}
          isLoading={isLoadingUnits}
          error={isLoadingError}
        />
      </div>
    </motion.div>
  );
};

export default AddUnits;
