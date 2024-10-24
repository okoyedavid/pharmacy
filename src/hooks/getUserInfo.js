import { useContext } from "react";
import { UserContext } from "../ui/ProtectedRoutes";

export function GetUserInfo() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error(
      "you're trying to access the userInfo context outside its provider"
    );

  return context;
}
