import React from "react";
import { FaEnvelope, FaPhone, FaCalendarAlt, FaUserEdit } from "react-icons/fa";

const Profile = () => {
  const profileData = {
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "1234567890",
    accountCreated: "2022-01-01",
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-10">
          <div className="p-4 rounded  text-center">
            <div className="mb-4">
              <img
                src="profile.jpg"
                alt="Profile"
                className="img-fluid rounded-circle border border-3  border-primary"
                style={{ width: "120px", height: "120px" }}
              />
              <h2 className="mt-3 text-primary">{profileData.name}</h2>
            </div>
            <div className="bg-white shadow-lg  p-3 rounded mb-3 d-flex align-items-center justify-content-center ">
              <FaEnvelope className="text-primary me-2" />

              <p className="text-muted pt-2 ms-2">{profileData.email}</p>
            </div>
            <div className="bg-white shadow-lg  p-3 rounded mb-3 d-flex align-items-center justify-content-center ">
              <FaPhone className="text-blue me-2" />
              <p className="text-muted pt-2 ms-2">{profileData.contact}</p>
            </div>
            <div className="bg-white shadow-lg  p-3 rounded d-flex align-items-center justify-content-center ">
              <FaCalendarAlt className="text-blue me-2" />

              <p className="text-muted pt-2 ms-2">
                {profileData.accountCreated}
              </p>
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
