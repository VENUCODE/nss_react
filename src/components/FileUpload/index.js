import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  InputAdornment,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import ImageUpload from "../Helper/ImageUpload";
import { FaUser, FaEnvelope, FaPhone, FaKey, FaHashtag } from "react-icons/fa";
import { Divider, message } from "antd";
import { hosturl, links } from "../../api";

const FileUpload = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedFiles, setSelectedFiles] = useState(null);
  const assignRole = watch("assignRole");

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
        message.success("User created successfully!");
        reset();
        setSelectedFiles(null);
      } else {
        message.error("Submission failed");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      message.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="dvh100 container pt-4">
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <Divider orientation="left" orientationMargin={10}>
          <span className="ff-p">Personal information</span>
        </Divider>
        <Grid container spacing={2}>
          {/* Username */}
          <Grid item xs={12} md={6} lg={4}>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: "Username is required" }}
              render={({ field }) => (
                <TextField
                  size="small"
                  {...field}
                  label={<span className="ff-p">Username</span>}
                  variant="outlined"
                  fullWidth
                  error={!!errors.username}
                  helperText={errors.username?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUser />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>

          {/* User Email */}
          <Grid item xs={12} md={6} lg={4}>
            <Controller
              name="userEmail"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => (
                <TextField
                  size="small"
                  {...field}
                  label={<span className="ff-p">User Email</span>}
                  variant="outlined"
                  fullWidth
                  error={!!errors.userEmail}
                  helperText={errors.userEmail?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaEnvelope />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>

          {/* User Phone Number */}
          <Grid item xs={12} md={6} lg={4}>
            <Controller
              name="userPhoneNumber"
              control={control}
              defaultValue=""
              rules={{
                required: "User Phone number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must be numeric",
                },
              }}
              render={({ field }) => (
                <TextField
                  size="small"
                  {...field}
                  label={<span className="ff-p">User Phone Number</span>}
                  variant="outlined"
                  fullWidth
                  error={!!errors.userPhoneNumber}
                  helperText={errors.userPhoneNumber?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaPhone />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>

          {/* Alternative Number */}
          <Grid item xs={12} md={6} lg={4}>
            <Controller
              name="alternativeNumber"
              control={control}
              defaultValue=""
              rules={{ required: "Alternative number is required" }}
              render={({ field }) => (
                <TextField
                  size="small"
                  {...field}
                  label={<span className="ff-p">Alternative Number</span>}
                  variant="outlined"
                  fullWidth
                  error={!!errors.alternativeNumber}
                  helperText={errors.alternativeNumber?.message}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaHashtag />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Divider orientation="left" orientationMargin={20}>
            <span className="ff-p">Grant Admin privilages</span>
          </Divider>
          {/* Assign Role Checkbox */}
          <Grid item xs={12} md={6} lg={4}>
            <Controller
              name="assignRole"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} checked={field.value} />}
                  label={<span className="ff-p">Assign Role</span>}
                />
              )}
            />
          </Grid>

          {/* Password (Conditional) */}
          {assignRole && (
            <>
              <Grid item xs={12} md={6} lg={4}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      size="small"
                      {...field}
                      label={<span className="ff-p">Password</span>}
                      type="password"
                      variant="outlined"
                      fullWidth
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaKey />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={4}>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      label={<span className="ff-p">Confirm Password</span>}
                      type="password"
                      variant="outlined"
                      fullWidth
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword?.message}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FaKey />
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
            </>
          )}
        </Grid>
        <Divider orientation="left" orientationMargin={10}>
          <span className="ff-p">Upload Profile photo</span>
        </Divider>
        <Grid item xs={6} lg={6} md={6} xl={6}>
          <ImageUpload
            class="col-6 py-3 float-start"
            eventPhotos={selectedFiles}
            setEventPhotos={setSelectedFiles}
            limit={1}
          />
        </Grid>
        {/* File Upload Component */}

        {/* Submit Button */}
        <Grid container justifyContent="flex-end" spacing={2} mt={2}>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              <span className="ff-p">Submit</span>
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FileUpload;
