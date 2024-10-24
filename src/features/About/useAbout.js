import toast from "react-hot-toast";
import { supabase } from "../../services/supabase";
import { useQuery } from "@tanstack/react-query";

async function fetchAbout() {
  let { data: about, error } = await supabase.from("about").select("about");
  if (error) {
    console.error(error);
    toast.error("we encountered an error please reload");
    return null;
  }

  return about[0].about[0];
}

function useAbout() {
  const { data: { about, departments } = {}, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: fetchAbout,
  });

  return { about, departments, isLoading };
}

export default useAbout;
