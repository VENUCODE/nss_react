import { Image } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { childrenVariant } from "../../animationVariants";
const ImageCard = ({ src, alt }) => {
  return (
    <motion.div
      style={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
      variants={childrenVariant}
      initial={{ scale: 0.9 }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        style={{
          objectFit: "cover",

          transition: "transform 0.3s",
        }}
      />
    </motion.div>
  );
};

export default ImageCard;
