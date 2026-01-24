import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/Router";

const App = () => {
  return <RouterProvider router={myRoutes} />;
};

export default App;
