import { redirect } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { AddUser, createUser, validateUser } from "./helper";
import { userUrl } from "./api";

export async function validateLogin({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const password = formData.get("password");
  const errors = {};

  if (!name) errors.name = "please fill in your name";
  if (!password) errors.password = "please fill in your password";

  if (Object.keys(errors).length > 0) {
    toast.error("Please fill in the appropriate fields");
    return errors;
  }
  try {
    const response = await axios.get(userUrl);
    const value = validateUser(response.data, name, password);
    if (value) return redirect("/dashboard/user");
    else {
      errors.message = "invalid password or username please try again";
    }
  } catch (errors) {
    console.log(errors);
    toast.error("we encountered an error logging you in please try again");
  }

  return errors;
}

export async function SignupUser({ request }) {
  const formData = await request.formData();
  const { body, errors } = createUser(formData);
  if (Object.keys(errors).length > 0) {
    toast.error("please fill in all fields");
    return errors;
  }

  const value = AddUser(body);
  if (value) return { success: true, id: body.id };

  return errors;
}

export function loader() {
  if (localStorage.getItem("state")) return redirect("/dashboard/user");

  return null;
}
