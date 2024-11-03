import React, { useEffect, useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Grid2 as Grid,
} from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import { FaUser, FaEnvelope, FaPhone, FaKey, FaHashtag } from "react-icons/fa";
import { Divider, message, Button } from "antd";
import { hosturl, links } from "../../../api";
import ImageUpload from "../../../components/Helper/ImageUpload";

const AddUser = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const assignRole = watch("assignRole");
  const inputFields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      icon: <FaUser />,
      rules: { required: "Username is required" },
    },
    {
      name: "userEmail",
      label: "User Email",
      type: "email",
      icon: <FaEnvelope />,
      rules: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Invalid email format",
        },
      },
    },
    {
      name: "userPhoneNumber",
      label: "User Phone Number",
      type: "text",
      icon: <FaPhone />,
      rules: {
        required: "User Phone number is required",
        pattern: {
          value: /^[0-9]+$/,
          message: "Phone number must be numeric",
        },
      },
    },
    {
      name: "alternativeNumber",
      label: "Alternative Number",
      type: "text",
      icon: <FaHashtag />,
      rules: { required: "Alternative number is required" },
    },
  ];

  const passwordFields = [
    {
      name: "password",
      label: "Password",
      type: "password",
      icon: <FaKey />,
      rules: {
        required: "Password is required",
        minLength: {
          value: 6,
          message: "Password must be at least 6 characters",
        },
      },
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      icon: <FaKey />,
      rules: {
        required: "Confirm Password is required",
        validate: (value) =>
          value === watch("password") || "Passwords do not match",
      },
    },
  ];

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("useremail", data.userEmail);
    formData.append("usernumber", data.userPhoneNumber);
    formData.append("useralnumber", data.alternativeNumber);
    formData.append("assign_role", data.assignRole);
    formData.append("added_by", "1");

    if (selectedFiles && selectedFiles.length > 0) {
      formData.append("profilePhoto", selectedFiles[0].originFileObj);
    }

    if (data.assignRole) {
      formData.append("userpassword", data.password);
    }

    console.log([...formData]);

    try {
      const response = await fetch(hosturl + links.addUser, {
        method: "POST",
        body: formData,
      });

      if (response.status === 201) {
        message.success("User created successfully!", 2);
        reset();
        setSelectedFiles(null);
      } else {
        message.error("Submission failed", 1);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      message.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container-fluid px-0 mx-0">
      <form onSubmit={handleSubmit(onSubmit)} className="w-100 container-fluid">
        <Divider orientation="left" orientationMargin={10}>
          <span className="ff-p">Personal Information</span>
        </Divider>

        <Grid container rowGap={2}>
          {inputFields.map((field) => (
            <Grid size={{ xs: 12, sm: 6 }} key={field.name} className="px-1">
              <Controller
                name={field.name}
                control={control}
                defaultValue=""
                rules={field.rules}
                render={({ field: controllerField }) => (
                  <TextField
                    size="small"
                    {...controllerField}
                    label={<span className="ff-p">{field.label}</span>}
                    variant="outlined"
                    fullWidth
                    error={!!errors[field.name]}
                    helperText={errors[field.name]?.message}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {field.icon}
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
          ))}

          <Grid size={{ xs: 12 }}>
            <Divider orientation="left" orientationMargin={10}>
              <span className="ff-p me-3">Make Admin</span>
              <Controller
                name="assignRole"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                        className="rounded-circle"
                      />
                    }
                  />
                )}
              />
            </Divider>
          </Grid>

          {assignRole &&
            passwordFields.map((field) => (
              <Grid size={{ xs: 12, sm: 6 }} className="px-1" key={field.name}>
                <Controller
                  name={field.name}
                  control={control}
                  defaultValue=""
                  rules={field.rules}
                  render={({ field: controllerField }) => (
                    <TextField
                      size="small"
                      {...controllerField}
                      label={<span className="ff-p">{field.label}</span>}
                      type={field.type}
                      variant="outlined"
                      fullWidth
                      error={!!errors[field.name]}
                      helperText={errors[field.name]?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {field.icon}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
            ))}

          <Divider orientation="left" orientationMargin={10}>
            <span className="ff-p">Upload Profile Photo</span>
          </Divider>
          <Grid size={{ xs: 12 }}>
            <ImageUpload
              className="w-100 h-50"
              eventPhotos={selectedFiles}
              setEventPhotos={setSelectedFiles}
              limit={1}
            />
          </Grid>

          <Grid size={{ xs: 12 }} className="text-center ">
            <Button
              variant="filled"
              color="danger"
              htmlType="submit"
              block
              className="border w-75 mx-auto border-1 border-danger py-3 shadow"
            >
              <span className="ff-p">Add User</span>
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddUser;
