import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const UserAvatar = ({ name = "name", picture = null }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Avatar
        src={picture}
        onClick={() => navigate("/user-profile")}
        sx={{
          width: 35,
          height: 35,
          border: "2px solid",
          borderColor: "primary.main",
          borderRadius: "50%",
          cursor: "pointer",

          boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
          animation: "pulse 2s infinite alternate",
          "@keyframes pulse": {
            "0%": { boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)" },
            "100%": { boxShadow: "0 0 0 10px rgba(0, 0, 0, 0.1)" },
          },
        }}
        alt={name}
        className="bg-danger color-light c-pointer"
      >
        {name && name.charAt(0).toUpperCase()}
      </Avatar>
    </div>
  );
};

export default UserAvatar;
