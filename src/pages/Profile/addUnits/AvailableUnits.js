import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Table, Input, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { hosturl, links } from "../../../api";
import CSVViewer from "./CSVViewer";

const AvailableUnits = ({ data, isLoading, error }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = data.filter((record) =>
      Object.values(record).some((field) =>
        String(field).toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    message.error(error.message);
    return <div>Error: {error.message}</div>;
  }

  const columns = [
    {
      title: "Title",
      dataIndex: "unit_title",
      key: "unit_title",
      sorter: (a, b) =>
        String(a.unit_title).localeCompare(String(b.unit_title)),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Uploaded on",
      dataIndex: "created_at",
      key: "created_at",
      render: (date) => new Date(date).toDateString(),
      sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "View",
      key: "view",
      render: (_, record) => (
        <CSVViewer url={hosturl + record.unit_path} title={record.unit_title} />
      ),
    },
  ];

  return (
    <div className="container  rounded-2 mt-2 p-2 dots-bg">
      <div className="d-flex flex-row justify-content-between">
        <p className="heading m-0 p-0 d-inline ff-p">
          {" "}
          <span>Available Units</span>
        </p>
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={handleSearch}
          style={{ marginBottom: 16, height: "30px", width: "300px" }}
        />
      </div>

      <Table
        dataSource={filteredData}
        columns={columns}
        pagination={{ pageSize: 5 }}
        rowKey={(record) => record.id || record.unit_path}
        bordered
        className="ff-p"
        loading={isLoading}
      />
    </div>
  );
};

export default AvailableUnits;
