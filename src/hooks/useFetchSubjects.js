import { useQuery } from "@tanstack/react-query";
import { fetchSubjects } from "../services/helper";
import { GetUserInfo } from "./getUserInfo";

function useFetchSubjects() {
  const { user } = GetUserInfo();

  const { level } = user.user_metadata;

  const { data: subjects, isLoading: fetchingSubjects } = useQuery({
    queryKey: ["subjects"],
    queryFn: () => fetchSubjects(level),
  });

  return { subjects, fetchingSubjects };
}

export default useFetchSubjects;
