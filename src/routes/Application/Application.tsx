import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import "./Application.css";

const Application = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Application;
