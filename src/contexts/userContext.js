import axios from "axios";
import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { jwtDecode } from "jwt-decode";
import { hosturl, links } from "../api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userid, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [logoutId, setLogoutId] = useState(null);
  const [userData, setUserData] = useState(null);

  // Utility function to login with credentials
  const login = useCallback(
    async ({ email, password }) => {
      let message = {};
      try {
        console.log({ email, password });
        const response = await axios.post(hosturl + links.login, {
          useremail: email,
          userpassword: password,
        });

        // Check response status
        if (response.status !== 200) {
          throw new Error("Failed to login");
        }

        const { token } = response.data;
        const decodedToken = jwtDecode(token);

        setUserId(decodedToken["user_id"]);
        setAuthToken(token);
        setIsAuthenticated(true);
        localStorage.setItem("authToken", token);
        localStorage.setItem("user_id", decodedToken["user_id"]);
        if (logoutId) {
          clearTimeout(logoutId);
        }

        // Schedule automatic logout when the token expires
        const expirationTime = decodedToken.exp * 1000;
        const logoutTimeout = setTimeout(
          () => logout(),
          expirationTime - Date.now()
        );
        setLogoutId(logoutTimeout);
        message.status = true;
        message.info = "Login Successful";
      } catch (error) {
        console.log(error);
        message.status = false;
        message.info = "Login Failed";
      }
      return message;
    },
    [logoutId]
  );

  const getUserDetails = useCallback(async () => {
    try {
      const response = await axios.get(hosturl + links.getUserDetails, {
        headers: {
          Authorization: authToken,
        },
      });

      if (response.status !== 200) {
        throw new Error("Failed to get user details");
      }

      const data = response.data;

      setUserData(data);
    } catch (error) {
      console.error("Error getting user details:", error);
      return null;
    }
  }, [authToken]);

  const logout = useCallback(() => {
    setUserId(null);
    setAuthToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userid");
    if (logoutId) clearTimeout(logoutId);
  }, [logoutId]);

  // Check token validity on initial load
  const checkTokenValidity = useCallback(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        if (Date.now() >= decodedToken.exp * 1000) {
          logout();
        } else {
          setUserId(localStorage.getItem("user_id"));
          setAuthToken(storedToken);
          setIsAuthenticated(true);
          const expirationTime = decodedToken.exp * 1000;
          setTimeout(() => logout(), expirationTime - Date.now());
        }
      } catch (error) {
        console.error("Token validation error:", error);
        logout();
      }
    }
  }, [logout]);

  useEffect(() => {
    checkTokenValidity();
  }, [checkTokenValidity]);
  useEffect(() => {
    if (userid && isAuthenticated) {
      getUserDetails();
    }
  }, [userid, isAuthenticated, getUserDetails]);

  return (
    <UserContext.Provider
      value={{ authToken, userid, userData, isAuthenticated, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to access user context
const useUser = () => {
  return useContext(UserContext);
};
export default useUser;
