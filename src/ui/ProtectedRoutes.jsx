import { createContext, useEffect } from "react";
import useGetUser from "../hooks/useGetUser";
import SpinnerFullPage from "./SpinnerFullPage";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isLoading, user, isAuthenticated } = useGetUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) return <SpinnerFullPage />;

  if (isAuthenticated)
    return (
      <UserContext.Provider value={{ user }}> {children}</UserContext.Provider>
    );
}

export default ProtectedRoutes;
