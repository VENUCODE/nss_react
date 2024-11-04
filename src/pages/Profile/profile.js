import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaUserEdit,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import useUser from "../../contexts/userContext";
import { hosturl } from "../../api";
import { Avatar } from "@mui/material";
import { Badge, Button } from "antd";
import { pageVariant } from "../../animationVariants";
import { motion } from "framer-motion";
const Profile = () => {
  const { userData, logout } = useUser();
  const {
    user_name = "user name",
    user_email = "email@gmail.com",
    user_number = "phone number",
    user_al_number = "alter",
    profile_photo = null,
  } = userData;

  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="container  mt-5 position-relative  py-2 bg-gradient bg-blur"
    >
      <div className="container-fluid position-relative  ">
        <div className="d-flex  flex-column justify-content-center align-items-center">
          <Avatar
            src={hosturl + profile_photo}
            alt="Profile"
            className="border border-2 border-danger shadow-md   mb-3"
            sx={{
              width: 200,
              height: 200,

              fontSize: "3rem",
            }}
          >
            {user_name
              .split(" ")
              .slice(0, 2)
              .map((word) => word.charAt(0).toUpperCase())
              .join("")}
          </Avatar>
          <h2 className="mt-2 text-blue text-capitalize ff-p">{user_name}</h2>
        </div>

        <div className="p-3 mb-4 d-flex flex-column align-items-center justify-content-center">
          <div className="">
            <FaEnvelope className="text-danger me-2 " size={20} />
            <span className="text-muted ff-p text-lowercase">{user_email}</span>
          </div>
          <div className=" mt-2">
            <Badge count={1} offset={[-30, 10]} size="small" color="lime">
              <FaPhone className="text-success me-2" size={20} />
            </Badge>
            <span className="text-muted ff-p me-3">{user_number}</span>
            {user_al_number && (
              <>
                <Badge count={2} offset={[-30, 10]} size="small" color="gray">
                  <FaPhone className="text-secondary me-2" size={20} />
                </Badge>
                <span className="text-muted ff-p">{user_al_number}</span>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 d-flex flex-row gap-2 justify-content-center">
          <Button variant="outlined" color="primary">
            <FaUserEdit className="me-2" /> Edit Profile
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              logout();
            }}
            color="danger"
          >
            <FaSignOutAlt className="me-2" /> Logout
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
