import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./routes/Home";
import Recipes from "./routes/Recipes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
