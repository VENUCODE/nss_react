import React from "react";
import Marquee from "react-fast-marquee";
import MemberCardHome from "./membercard";
import useMember from "../../contexts/useMembers";
import PlaceHolder from "../../components/PlaceHolder";

const HomeMembers = () => {
  const { members, loading } = useMember();
  if (loading) {
    return (
      <>
        <Marquee loop={0} autoFill play direction="right">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <PlaceHolder />
          ))}
        </Marquee>
      </>
    );
  }
  return (
    <Marquee loop={0} autoFill play pauseOnHover direction="right">
      {members.map((item, ind) => {
        return <MemberCardHome key={ind} data={item} />;
      })}
    </Marquee>
  );
};

export default HomeMembers;
