import * as React from "react";
import { Modal as MyModal, Box, IconButton } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai"; // Import cross icon from react-icons

const Modal = ({ open, onClose, children }) => {
  return (
    <MyModal
      open={open}
      onClose={onClose}
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          width: "90%",
          maxWidth: 400,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "grey.500",
          }}
        >
          <AiOutlineClose size={24} />
        </IconButton>
        {children}
      </Box>
    </MyModal>
  );
};

export default Modal;
