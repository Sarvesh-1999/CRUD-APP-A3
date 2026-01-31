import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
    
  const token = sessionStorage.getItem("accessToken");

  return token ? props.children : <Navigate to={"/"} />;
};

export default PrivateRoute;
