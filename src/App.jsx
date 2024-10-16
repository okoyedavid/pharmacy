import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./ui/MainLayout";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Error from "./ui/Error";
import About, { loader as AboutLoader } from "./Pages/About";
import Login, {
  loader as actionLoader,
  action as LoginForm,
} from "./features/Auth/Login";
import User, { loader as loadUser } from "./features/User/User";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { element: <Home />, path: "/" },
        {
          path: "/about",
          element: <About />,
          loader: AboutLoader,
          errorElement: <Error />,
        },

        {
          path: "dashBoard",
          element: <Dashboard />,
          errorElement: <Error />,
          children: [
            {
              path: "login",
              element: <Login />,
              action: LoginForm,
              loader: actionLoader,
              errorElement: <Error />,
            },
            {
              path: "user",
              element: <User />,

              loader: loadUser,
              errorElement: <Error />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
