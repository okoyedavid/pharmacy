import toast from "react-hot-toast";
import { supabase } from "./supabase";
import { redirect } from "react-router-dom";
import axios from "axios";
import { aboutUrl } from "./api";

export async function fetchSubjects() {
  try {
    const { data: subjects, error } = await supabase
      .from("200lvl 1st semester subjects")
      .select("*")
      .order("code", { ascending: true });

    if (error) {
      throw error;
    }

    return subjects;
  } catch (err) {
    console.error(err);
    toast.error("We encountered an error fetching the subjects");
    return null;
  }
}

export function fetchUser() {
  if (!localStorage.getItem("state")) return redirect("/login");

  const state = localStorage.getItem("state");

  return JSON.parse(state);
}

export async function fetchAbout() {
  try {
    const response = await axios.get(aboutUrl);
    const data = await response.data;

    return data;
  } catch (error) {
    console.error(error);
    toast.error("we encountered an error please reload");
  }
}

export function checkLogin() {
  if (localStorage.getItem("state")) return redirect("/dashboard/user");

  return null;
}

export async function loadEditValues() {
  const state = JSON.parse(localStorage.getItem("state"));
  const { userInfo, schoolInfo } = state;

  const values = {
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password,
    class: schoolInfo.level,
    quote: "if lovebite they bring am abeg ",
  };

  return values;
}
