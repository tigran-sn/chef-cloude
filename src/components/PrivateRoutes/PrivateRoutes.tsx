import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { UserContext } from "../../context/user.context";

const PrivateRoutes = () => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/auth/sign-in?redirectUrl=${encodeURIComponent(location.pathname)}`}
    />
  );
};

export default PrivateRoutes;
