import { supabase } from "./supabase";
import store from "../Store/Store";
import {
  selectIsUserAuthenticated,
  selectRole,
  setUser,
  updateUserInfo,
} from "../Store/userSlice";
import { supabaseUrl } from "./api";

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
    createNewUser(data.user.id);
  }
  return data;
}

export async function login({ email, password }) {
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

export async function createNewUser(id) {
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

  return data?.user;
}

export async function updateCurrentUser({
  name,
  level,
  quote,
  date,
  bio,
  location,
}) {
  const finalData = {
    name,
    level,
    quote,
    date,
    bio,
    location,
  };

  // Step 1: Update user metadata without avatar
  const { data: newData, error } = await supabase.auth.updateUser({
    data: finalData,
  });
  if (error) throw new Error(error.message);

  store.dispatch(updateUserInfo(newData?.user.user_metadata));
  return newData;

  // Step 2: i Check if there's an existing avatar to delete

  // Step 3: Upload the new image
  // const newFileName = `avatar-${newData.user.id}-${Date.now()}`;
  // // const { error: storageError } = await supabase.storage
  // const oldAvatarUrl = newData.user.user_metadata?.avatar;
  // const oldFileName = oldAvatarUrl ? oldAvatarUrl.split("/").pop() : null;
  //   .from("avatars")
  //   .upload(newFileName, image);

  // if (storageError) throw new Error(storageError.message);

  // const newAvatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${newFileName}`;

  // // Step 4: Update user with the new avatar URL
  // const { data: updatedUser, error: updateError } =
  //   await supabase.auth.updateUser({
  //     data: { avatar: newAvatarUrl },
  //   });
  // if (updateError) throw new Error(updateError.message);

  // // Step 5: If the update succeeds, delete the old avatar file if it exists
  // if (oldFileName) {
  //   const { error: deleteError } = await supabase.storage
  //     .from("avatars")
  //     .remove([oldFileName]);

  //   if (deleteError)
  //     console.warn("Failed to delete old avatar:", deleteError.message);
  // }

  // store.dispatch(updateUserInfo(updatedUser?.user.user_metadata));
  // return updatedUser;
}
