import React from "react";
import { FaEnvelope, FaPhone, FaCalendarAlt, FaUserEdit } from "react-icons/fa";
import useUser from "../../contexts/userContext";
import { hosturl } from "../../api";
import { Avatar } from "@mui/material";

const Profile = () => {
  const { userData } = useUser();
  const {
    user_name = "user name",
    user_email = "email@gmail.com",
    user_number = "phone number",
    user_al_number = "alter",
    profile_photo = null,
  } = userData;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-10">
          <div className="p-4 rounded  text-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Avatar
                src={profile_photo ? hosturl + profile_photo : ""}
                alt="Profile"
                className="shadow bg-danger"
                sx={{
                  width: 120,
                  height: 120,
                  border: "3px solid",
                  borderColor: "danger",
                  fontSize: "3rem",
                }}
              >
                {user_name
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word.charAt(0).toUpperCase())
                  .join("")}
              </Avatar>
              <h2 className="mt-3 text-blue text-capitalize ff-p">
                {user_name}
              </h2>
            </div>
            <div className="bg-white shadow-lg  p-3 rounded mb-3 d-flex align-items-center justify-content-center ">
              <FaEnvelope className="text-primary me-2" />

              <p className="text-muted pt-2 ms-2">{user_email}</p>
            </div>
            <div className="bg-white shadow-lg  p-3 rounded mb-3 d-flex align-items-center justify-content-center ">
              <FaPhone className="text-blue me-2" />
              <p className="text-muted pt-2 ms-2">{user_number}</p>
            </div>

            <div className="mt-4  d-flex  align-items-center justify-content-center">
              <button className="btn btn-primary d-flex align-items-center ">
                <FaUserEdit className="me-2" /> Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
