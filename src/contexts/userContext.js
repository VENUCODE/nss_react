import { createContext, useContext, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { hosturl, links } from "../api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const authToken = localStorage.getItem("authToken") || null;
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  const logout = () => {
    localStorage.clear();
    queryClient.clear();
    setIsAuthenticated(false);
  };

  const { data: BannerImages = [], refetch: refetchBannerImages } = useQuery({
    queryKey: ["bannerImages"],
    queryFn: async () => {
      const response = await axios.get(hosturl + links.getBannerImages);
      return response.data;
    },

    enabled: isAuthenticated,
    onError: (error) => console.error("Error fetching banner images:", error),
  });

  const addBannerImagesMutation = useMutation({
    mutationFn: async (listOfFiles) => {
      const formData = new FormData();
      listOfFiles.forEach((file, ind) => {
        formData.append(`images${ind}`, file.originFileObj);
      });

      const response = await axios.post(
        hosturl + links.addBannerImages,
        formData,
        {
          headers: { Authorization: authToken },
        }
      );
      return response.data;
    },

    onSuccess: () => {
      refetchBannerImages();
    },
  });

  const { data: userData, refetch: refetchUserDetails } = useQuery({
    queryKey: ["userDetails"],
    queryFn: async () => {
      const response = await axios.get(hosturl + links.getUserDetails, {
        headers: { Authorization: authToken },
      });
      return response.data;
    },
    enabled: isAuthenticated,
    onError: () => logout(),
  });

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axios.post(hosturl + links.login, {
        useremail: email,
        userpassword: password,
      });
      return response.data;
    },
    onSuccess: ({ token }) => {
      const decodedToken = jwtDecode(token);
      localStorage.setItem("authToken", token);
      localStorage.setItem("user_id", decodedToken.data.user_id);
      setIsAuthenticated(true);
      queryClient.invalidateQueries();
    },
  });

  return (
    <UserContext.Provider
      value={{
        authToken,
        isAuthenticated,
        userData,
        BannerImages,
        addBannerImages: addBannerImagesMutation.mutate,
        login: loginMutation.mutateAsync,
        logout,
        getBannerImages: refetchBannerImages,
        getUserDetails: refetchUserDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);
export default useUser;
