import axios from "axios";
import store from "../Store/Store";
import { getUser } from "../Store/userSlice";
import { userUrl } from "./api";

export function createUser(formData) {
  const name = formData.get("name");
  const password = formData.get("password");
  const level = formData.get("class");
  const email = formData.get("Email");
  const errors = {};

  const body = {
    id: Date.now().toString(),
    status: "student",
    userInfo: {
      name,
      password,
      email,
    },

    schoolInfo: {
      level,
      carryOvers: {
        subjects: [],
      },
      AdmissionYear: "",
      currentGP: "",
    },
  };

  if (!name) errors.name = "please fill in your name";
  if (!password) errors.password = "please fill in your password";
  if (!level) errors.class = "please fill in your class";
  if (!email) errors.email = "please fill in your Email";

  return { body, errors };
}

export async function AddUser(body) {
  try {
    await axios.post(userUrl, body);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function validateUser(data, name, password) {
  const authenticatedUser = Object.values(data.dataBase).find(
    (user) => user.userInfo.name === name && user.userInfo.password === password
  );

  if (authenticatedUser) {
    store.dispatch(getUser(authenticatedUser));
    localStorage.setItem("state", JSON.stringify(authenticatedUser));
    return true;
  } else {
    return false;
  }
}
