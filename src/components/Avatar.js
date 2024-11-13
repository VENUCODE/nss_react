import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
const UserAvatar = ({
  name = "name",
  picture = "https://picsum.photos/seed/picsum/200/300",
  showname = false,
}) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center gap-2 ps-2 text-capitalize ff-m fw-bold text-red">
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          src={picture}
          alt={name}
          // variant="rounded"
          onClick={() => navigate("/user-profile")}
          sx={{ cursor: "pointer" }}
          className="bg-danger color-light c-pointer border-2 shadow c-pointer border border-primary"
        >
          {name && name.charAt(0).toUpperCase()}
        </Avatar>
      </StyledBadge>
      {name && showname && name}
    </div>
  );
};

export default UserAvatar;
