import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const ProtectedRoutes = ({children, roles, departments}) => {
  const {currentUser, isAuthenticated} = useAuth();
  console.log(currentUser)

  if (!currentUser) return <Navigate to= "/signin"/>

  if(roles && !roles.includes( currentUser.roles) && !departments.includes(currentUser.department)){
     
    toast.error("Unauthorized access")
    return <Navigate to="/" />
   

    
  }

    return children

 
};

export default ProtectedRoutes;
