import toast from "react-hot-toast";
import { supabase } from "./supabase";

export async function fetchSubjects(level) {
  try {
    const { data: subjects, error } = await supabase
      .from("courses")
      .select("*")
      .eq("level", level)
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
