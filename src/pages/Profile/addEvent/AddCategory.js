import React, { useState } from "react";
import { Button, Divider, message, Input, Form, Tag } from "antd";
import useAddEvent from "../../../contexts/useAddEvent";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const { addEventCategory, eventCategories } = useAddEvent();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName) {
      message.error("Categroy Name cant be empty");
      return;
    }
    setLoading(true);
    try {
      const res = await addEventCategory(categoryName.trim());
      console.log(res);
      if (!res.status) {
        throw new Error(res.message);
      }
      message.success(res.message);
      setCategoryName("");
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid threed-look rounded-3 p-2 my-4">
      <Divider orientation="left" orientationMargin={0} className="mb-4">
        <span className="fw-bold ff-p">Add Category</span>
      </Divider>
      <div className="bg-white p-4 rounded-3 shadow">
        <Form onSubmitCapture={handleSubmit} className=" d-flex flex-row gap-3">
          <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
            className="shadow-sm"
          />

          <Button type="primary" loading={loading} htmlType="submit">
            Add Category
          </Button>
        </Form>
      </div>
      <div className="bg-white rounded-3 pb-2 pt-1 px-2 mt-2 shadow">
        <Divider
          orientation="left"
          orientationMargin={0}
          className="ff-p text-success mt-0"
        >
          Available Categories
        </Divider>
        <div className="mt-4 d-flex flex-row flex-wrap  align-items-center">
          {eventCategories?.map((val) => (
            <span key={val.ec_id} className=" ">
              <Tag color="blue" className="text-capitalize">
                {val.ec_name}
              </Tag>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
