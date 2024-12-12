import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Recipes from "./routes/Recipes";
import Application from "./routes/Application";
import NotFound from "./routes/NotFound";
import Authentication from "./routes/Authentication";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Application />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/auth" element={<Authentication />}>
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
