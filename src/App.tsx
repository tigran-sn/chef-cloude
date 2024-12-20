import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Recipes from "./routes/Recipes";
import Application from "./routes/Application";
import NotFound from "./routes/NotFound";
import Authentication from "./routes/Authentication";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AboutUs from "./routes/AboutUs";
import PrivateRoutes from "./components/PrivateRoutes";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthRoute from "./components/AuthRoute/AuthRoute";
import FAQPage from "./routes/FAQPage";
import HowItWorks from "./routes/HowItWorks";

function App() {
  const auth = getAuth();

  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  });

  if (!authInitialized) {
    return (
      <Loader
        style={{
          width: "200px",
          height: "200px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Application />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/recipes" element={<Recipes />} />
          </Route>
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route
            path="/auth"
            element={
              <AuthRoute>
                <Authentication />
              </AuthRoute>
            }
          >
            <Route index element={<Navigate to="/auth/sign-in" replace />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
