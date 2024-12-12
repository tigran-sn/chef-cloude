import { Link, useLocation } from "react-router-dom";

import "./AuthLink.css";

const AuthLink = () => {
  const location = useLocation();
  const type = location.pathname.split("/").pop();
  const isSignIn = type === "sign-in";

  return (
    <p className="auth-link">
      {isSignIn ? "Don't have an account? " : "Already have an account? "}
      <Link to={isSignIn ? "/auth/sign-up" : "/auth/sign-in"}>
        {isSignIn ? "Sign Up" : "Sign In"}
      </Link>
    </p>
  );
};

export default AuthLink;
