import { useState } from "react";
import { Button, Card, Modal, Table, message, Input } from "antd";
import { EyeOutlined, SearchOutlined } from "@ant-design/icons";
import Papa from "papaparse";
import { hosturl } from "../../../api";

const CSVViewer = ({
  title = "title",
  url = hosturl + "/uploads/unit_csv/25846c2a2aadaa09273ebed7",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchAndParseCSV = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch the CSV file.");
      }
      const csvText = await response.text();
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          console.log(result);
          setCsvData(result.data);
          setFilteredData(result.data);
          setIsModalOpen(true);
        },
        error: (error) => {
          message.error("Failed to parse the CSV file.");
          console.error(error);
        },
      });
    } catch (error) {
      message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = csvData.filter((record) =>
      Object.values(record).some((field) =>
        String(field).toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  const columns = csvData.length
    ? Object.keys(csvData[0]).map((key) => ({
        title: key,
        dataIndex: key,
        key,
        sorter: (a, b) =>
          String(a[key] || "").localeCompare(String(b[key] || "")),
        sortDirections: ["ascend", "descend"],

        onFilter: (value, record) =>
          String(record[key] || "")
            .toLowerCase()
            .includes(value.toLowerCase()),
      }))
    : [];

  return (
    <div style={{ padding: "20px" }}>
      <Button
        className="btn-success btn-light"
        variant="outlined"
        icon={<EyeOutlined />}
        onClick={fetchAndParseCSV}
        loading={isLoading}
        block
      >
        View
      </Button>

      <Modal
        title={title}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={800}
      >
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={handleSearch}
          style={{ marginBottom: 16 }}
        />
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 6 }}
          rowKey={(record, index) => index}
          bordered
          scroll={{ x: 1000 }}
        />
      </Modal>
    </div>
  );
};

export default CSVViewer;
