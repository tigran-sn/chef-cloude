import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Recipes from "./routes/Recipes";
import Application from "./routes/Application";
import NotFound from "./routes/NotFound";
import SignIn from "./routes/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Application />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
