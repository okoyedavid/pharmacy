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
import SignUp, { action as signupAction } from "./features/Auth/SignUp";
import User, { loader as loadUser } from "./features/dashboard/User";
import Edit from "./features/dashboard/Edit";
import Payment from "./features/dashboard/Payments";
import Subjects from "./features/dashboard/Subjects";
import Results from "./features/dashboard/Results";

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
          path: "login",
          element: <Login />,
          action: LoginForm,
          loader: actionLoader,
          errorElement: <Error />,
        },
        {
          path: "signup",
          action: signupAction,
          element: <SignUp />,
          errorElement: <Error />,
        },
      ],
    },

    {
      path: "dashBoard",
      element: <Dashboard />,
      errorElement: <Error />,
      children: [
        {
          path: "user",
          element: <User />,

          loader: loadUser,
          errorElement: <Error />,
        },
        {
          path: "edit",
          element: <Edit />,
          errorElement: <Error />,
        },
        {
          path: "payments",
          element: <Payment />,
          errorElement: <Error />,
        },
        {
          path: "results",
          element: <Results />,
          errorElement: <Error />,
        },
        {
          path: "subjects",
          element: <Subjects />,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
