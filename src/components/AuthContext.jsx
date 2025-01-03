import React, { createContext, useContext, useState } from "react";
import { getEmployees } from "../utils/Employee";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isOpen, setisOpen] = useState(false);

  const login = (username, password) => {
    const user = getEmployees().find(
      (u) =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password
    );

    if (user) {
      setCurrentUser({
        _id: user.StaffID,
        username: user.username,
        role: user.cader,
        department: user.department,
        fullname: `${user.first_name} ${user.last_name}`,
        profilePics: user.profile_picture,
      });
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
  };

  // const notify = (message, staff_id)=>{

  // }
  const toggleOpen =()=>{
    setisOpen(!isOpen)
  }

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  const isAuthenticated = !!currentUser;
  return (
    <AuthContext.Provider
      value={{ currentUser, login, logout, isAuthenticated, toggleOpen,isOpen }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
