import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import "./Application.css";

const Application = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Application;
