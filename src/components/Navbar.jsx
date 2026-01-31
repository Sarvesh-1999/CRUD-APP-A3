import toast from "react-hot-toast";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { api } from "../axios/axiosInstance";

const Navbar = () => {
  const token = sessionStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);

  let params = useParams();

  const handleLogout = () => {
    let value = confirm("are you sure ?");
    if (value) {
      sessionStorage.removeItem("accessToken");
      navigate("/");
      toast.success("Logged out");
    }
  };

  const handleDeleteUser = async () => {
    let value = confirm("Are you sure ?");
    if (!value) return;

    let res = await api.delete(`/users/${params.id}`);
    console.log(res);

    if (res.status === 200) {
      toast.success("Profile Deleted");
      sessionStorage.removeItem("accessToken");
      navigate("/");
    }
    
  };

  return (
    <header className="bg-violet-600 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-extrabold">CRUD-APP</div>

      <nav>
        {token ? (
          <>
            <div className="relative">
              <GiHamburgerMenu onClick={() => setShowDropDown(!showDropDown)} />

              {showDropDown && (
                <ul className="absolute overflow-hidden rounded-lg shadow-lg top-5 right-0 bg-gray-50 text-black">
                  <li className="px-5 py-1 mb-1 hover:bg-gray-200 hover:cursor-pointer">
                    Update
                  </li>
                  <li
                    onClick={handleDeleteUser}
                    className="px-5 py-1 mb-1 hover:bg-gray-200 hover:cursor-pointer"
                  >
                    Delete
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-5 py-1 mb-1 hover:bg-gray-200 hover:cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet-800 px-3 py-1 rounded font-semibold"
                  : "bg-violet-600 text-white px-3 py-1 rounded font-semibold"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="/sign-up"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet-800 px-3 py-1 rounded font-semibold"
                  : "bg-violet-600 text-white px-3 py-1 rounded font-semibold"
              }
            >
              Signup
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
