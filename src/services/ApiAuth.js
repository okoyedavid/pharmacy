import { supabase } from "./supabase";
import store from "../Store/Store";
import {
  selectIsUserAuthenticated,
  selectRole,
  setUser,
} from "../Store/userSlice";

export async function signupUser({ name, email, password, level }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        avatar: "",
        level,
        status: "student",
      },
    },
  });

  if (error) throw new Error();

  if (data.user?.id) {
    createNewUSer(data.user.id);
  }
  return data;
}

export async function Login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function createNewUSer(id) {
  const { error } = await supabase.from("users").insert([{ user_id: id }]);

  if (error) throw new Error("there was a problem creating new user", error);
}

export async function getCurrentUser() {
  // first we check if user is logged in
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // if logged in we check if we already have is info in state ?
  const state = store.getState();
  const isUserAuthenticated = selectIsUserAuthenticated(state);
  const role = selectRole(state);

  if (isUserAuthenticated) return role;

  //if we dont have it in state we fetch the user from the supabase api
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  if (data?.user?.role === "authenticated") {
    const {
      user_metadata: { avatar, level, status, name },
      email,
      id,
      role,
    } = data.user;

    const currentUser = {
      id,
      email,
      profileImg: avatar,
      currentLevel: `${level}lvl`,
      status,
      name,
      role,
    };

    store.dispatch(setUser(currentUser));
  }

  return data?.user?.role;
}
