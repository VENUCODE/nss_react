import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { jwtDecode } from "jwt-decode";

import { message } from "antd";
// Create the context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [logoutId, setLogoutId] = useState(null);
  // Utility function to login with email and password
  const login = useCallback(async (email, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      const { token, userData, msg } = data;
      const decodedToken = jwtDecode(token);
      setUser(userData);
      setAuthToken(token);
      setIsAuthenticated(true);

      // Store the token in local storage
      localStorage.setItem("authToken", authToken);
      localStorage.setItem("userData", user);
      if (logoutId) {
        clearTimeout(logoutId);
      }

      // Schedule automatic logout when the token expires
      const expirationTime = decodedToken.exp * 1000;
      let logoutTimeout = setTimeout(
        () => logout(),
        expirationTime - Date.now()
      );
      setLogoutId(logoutTimeout);
      message.success("Login successful", 2000);
    } catch (error) {
      console.error("Login error:", error);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setAuthToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
  }, []);

  // Middleware function to check token validity on initial load
  const checkTokenValidity = useCallback(() => {
    setAuthToken(localStorage.getItem("authToken"));
    if (authToken) {
      try {
        const decodedToken = jwtDecode(authToken);
        if (Date.now() >= decodedToken.exp * 1000) {
          logout();
        } else {
          setUser(decodedToken);
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

  return (
    <UserContext.Provider
      value={{ authToken, user, isAuthenticated, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export default useUser;
