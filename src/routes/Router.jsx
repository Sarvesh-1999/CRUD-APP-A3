import { createBrowserRouter } from "react-router-dom";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../private/PrivateRoute";
import CreateEmployee from "../pages/CreateEmployee";
import AllEmployees from "../pages/AllEmployees";
import EditEmployee from "../pages/EditEmployee";

export const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/sign-up",
        element: <SignupPage />,
      },
      {
        path: "/dashboard/:id", // dynamic route
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-emp",
        element: <CreateEmployee />,
      },
      {
        path: "/all-emp",
        element: <AllEmployees />,
      },
      {
        path: "/edit-emp/:id", // dynamic route for id
        element: <EditEmployee />,
      },
    ],
  },
]);
