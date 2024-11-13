import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { pageVariant } from "../../animationVariants";
import Loading from "../../components/Loading";
import { Image, message } from "antd";
import axios from "axios";
import { hosturl, links } from "../../api";
import AuthMember from "../../components/AuthMember";
import MemberCard from "./Members/memberCard";
const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMembers = async () => {
    try {
      const res = await axios.get(hosturl + links.getMembers);
      if (res.status === 200) {
        setMembers(res.data);
      } else {
        throw new Error(res.message);
      }
    } catch (error) {
      console.log(error);
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMembers();
  }, []);

  if (loading) {
    return (
      <motion.div
        initial="initial"
        animate="enter"
        variants={pageVariant}
        className="dvh100 dots-bg"
      >
        <Loading />
      </motion.div>
    );
  }
  return (
    <motion.div
      initial="initial"
      animate="enter"
      variants={pageVariant}
      className="dvh100 dots-bg pb-3"
    >
      <h2 className="heading  m-0 ff-p pt-4 ">
        <span>Nss Coordinators</span>
      </h2>
      <div className="contianer gap-1 row  justify-content-start">
        {[...members, ...members]?.map((val, ind) => {
          return (
            <MemberCard
              src={hosturl + val.profile_photo}
              name={val.user_name}
              desig={val.designation}
              email={val.user_email}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default MembersPage;
