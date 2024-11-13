import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

import SpinnerFullPage from "./ui/SpinnerFullPage";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Store/Store.js";

const MainLayout = lazy(() => import("./ui/MainLayout"));

const Scribe = lazy(() => import("./Pages/Scribe"));
const Home = lazy(() => import("./Pages/Home"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Error = lazy(() => import("./ui/Error"));
const About = lazy(() => import("./Pages/About"));
const Login = lazy(() => import("./features/Auth/Login"));
const SignUp = lazy(() => import("./features/Auth/SignUp"));
const User = lazy(() => import("./features/dashboard/User"));
const Edit = lazy(() => import("./features/dashboard/Edit/Edit.jsx"));
const Payment = lazy(() => import("./features/dashboard/Payments"));
const Subjects = lazy(() => import("./features/dashboard/Subjects"));
const Results = lazy(() => import("./features/dashboard/Results"));
const Resources = lazy(() => import("./features/dashboard/Resources.jsx"));
const HealthScribe = lazy(() =>
  import("./features/dashboard/HealthScribe.jsx")
);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      staleTime: 0,
    },
  });
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { element: <Home />, path: "/" },
        {
          path: "/about",
          element: <About />,
          errorElement: <Error />,
        },
        {
          path: "/scribe",
          element: <Scribe />,
          errorElement: <Error />,
        },
        {
          path: "login",
          element: <Login />,
          errorElement: <Error />,
        },
        {
          path: "signup",
          element: <SignUp />,
          errorElement: <Error />,
        },
      ],
    },

    {
      path: "dashboard",
      element: (
        <PersistGate loading={<SpinnerFullPage />} persistor={persistor}>
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        </PersistGate>
      ),

      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <User />,
          errorElement: <Error />,
        },
        {
          path: "user",
          element: <User />,
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
        {
          path: "resources",
          element: <Resources />,
          errorElement: <Error />,
        },
        {
          path: "scribe",
          element: <HealthScribe />,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
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
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
