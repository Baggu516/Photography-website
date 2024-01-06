import React, { useContext } from "react";
import { useNavigate,Navigate,useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const RedirectRoute = ({ children }) => {
  let navigate=useNavigate()
  const { token } = useContext(AuthContext);
  return (
    <div>
{ token ?<Navigate to="/"/>:children }
    </div>
   )
};

export default RedirectRoute;