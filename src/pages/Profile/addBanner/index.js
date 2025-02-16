import React, { useEffect, useState } from "react";
import CroppedImage from "../../../components/Helper/CroppedImage";
import { Button, Divider, Image, message } from "antd";
import useUser from "../../../contexts/userContext";
import { hosturl } from "../../../api";
import {
  childrenVariant,
  containerVariant,
  pageVariant,
} from "../../../animationVariants";
import { motion } from "framer-motion";
import ImageUpload from "../../../components/Helper/ImageUpload";
const AddBannerImages = () => {
  const [files, setFiles] = useState([]);
  const { BannerImages, addBannerImages, getBannerImages } = useUser();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getBannerImages();
  }, []);
  const handleUpload = async () => {
    setLoading(true);
    const res = await addBannerImages(files);
    // if (res.status) {
    //   message.success(res.message);
    // } else {
    //   message.error(res.message);
    // }
    setFiles([]);
    setLoading(false);
  };
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100 container-fluid"
    >
      <div className="container fluid">
        <Divider orientation="center">Current Banner images</Divider>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariant}
          className="row row-gap-2"
        >
          {BannerImages?.map((image, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6"
              variants={childrenVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                style={{ aspectRatio: 2.5, width: "100%", objectFit: "cover" }}
                src={hosturl + image.photo_url}
              />
            </motion.div>
          ))}
          {!BannerImages && "No banner images available"}
        </motion.div>
      </div>
      <div
        className="container my-2 mx-auto"
        style={{ width: "300px", height: "200px" }}
      >
        <ImageUpload
          className=""
          eventPhotos={files}
          setEventPhotos={setFiles}
        />
      </div>
      <div className="text-center">
        <Button
          variant="filled"
          color="primary"
          loading={loading}
          disabled={files?.length === 0}
          onClick={handleUpload}
        >
          Upload images
        </Button>
      </div>
    </motion.div>
  );
};

export default AddBannerImages;
