import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";

const AuthRoute = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    // If user is logged in, redirect to home
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthRoute;
