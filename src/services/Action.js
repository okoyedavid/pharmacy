import { redirect } from "react-router-dom";

export function loader() {
  if (localStorage.getItem("state")) return redirect("/dashboard/user");

  return null;
}
