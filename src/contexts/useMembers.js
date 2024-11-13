import axios from "axios";
import { createContext, useContext } from "react";
import { hosturl, links } from "../api";
import { message } from "antd";
import { useQuery } from "@tanstack/react-query";

const MemberContext = createContext();

export function MemberProvider({ children }) {
  const fetchMembers = async () => {
    const res = await axios.get(`${hosturl}${links.getMembers}`);
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error(res.message || "Failed to fetch members");
    }
  };

  const {
    data: members = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["members"],
    queryFn: fetchMembers,
    onError: (error) => {
      message.error(error.message || "Failed to fetch members");
    },
  });

  return (
    <MemberContext.Provider value={{ members, refetch, isLoading }}>
      {children}
    </MemberContext.Provider>
  );
}

const useMember = () => {
  return useContext(MemberContext);
};

export default useMember;
