import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-violet-600 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-extrabold">CRUD-APP</div>

      <nav>
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
      </nav>
    </header>
  );
};

export default Navbar;
