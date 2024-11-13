import React from "react";
import { Image } from "react-bootstrap";
import "./AuthMember.css";
const AuthMember = ({ src, alt, name, desig, ...props }) => {
  return (
    <div className="auth-img ">
      <Image
        src={src}
        className="img-fluid "
        alt={alt}
        style={{
          height: "300px",
          width: "300px",
          objectFit: "scale-down",
          ...props.style,
        }}
      />
      <span>
        {name}
        <br />
        <small>{desig}</small>
      </span>
    </div>
  );
};

export default AuthMember;
