import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
