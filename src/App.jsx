import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import {
  fetchSubjects,
  fetchUser,
  fetchAbout,
  checkLogin,
  loadEditValues,
} from "./services/loaders";
import { validateLogin, SignupUser } from "./services/Action";
import SpinnerFullPage from "./ui/SpinnerFullPage";
import { Toaster } from "react-hot-toast";

const MainLayout = lazy(() => import("./ui/MainLayout"));
const Home = lazy(() => import("./Pages/Home"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Error = lazy(() => import("./ui/Error"));
const About = lazy(() => import("./Pages/About"));
const Login = lazy(() => import("./features/Auth/Login"));
const SignUp = lazy(() => import("./features/Auth/SignUp"));
const User = lazy(() => import("./features/dashboard/User"));
const Edit = lazy(() => import("./features/dashboard/Edit"));
const Payment = lazy(() => import("./features/dashboard/Payments"));
const Subjects = lazy(() => import("./features/dashboard/Subjects"));
const Results = lazy(() => import("./features/dashboard/Results"));

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { element: <Home />, path: "/" },
        {
          path: "/about",
          element: <About />,
          loader: fetchAbout,
          errorElement: <Error />,
        },
        {
          path: "login",
          element: <Login />,
          action: validateLogin,
          loader: checkLogin,
          errorElement: <Error />,
        },
        {
          path: "signup",
          action: SignupUser,
          element: <SignUp />,
          errorElement: <Error />,
        },
      ],
    },

    {
      path: "dashboard",
      element: <Dashboard />,
      errorElement: <Error />,
      children: [
        {
          path: "user",
          element: <User />,

          loader: fetchUser,
          errorElement: <Error />,
        },
        {
          path: "edit",
          element: <Edit />,
          errorElement: <Error />,
          loader: loadEditValues,
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
          loader: fetchSubjects,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <RouterProvider router={router}></RouterProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },

          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: `var(--white-clr-1)`,
            color: `var(--blue-clr-2)`,
          },
        }}
      />
    </Suspense>
  );
}

export default App;
