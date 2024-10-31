import { useQuery } from "@tanstack/react-query";
import { getCurrentUserSubjects } from "../services/helper";
import { useSearchParams } from "react-router-dom";
import { selectUser } from "../Store/userSlice";
import { useSelector } from "react-redux";

function useFetchSubjects() {
  const user = useSelector(selectUser);
  const { userid: id, level } = user;

  const [searchParams] = useSearchParams();
  const currentLevel = searchParams.get("level") || level;

  const { data, isLoading: fetchingSubjects } = useQuery({
    queryKey: ["subjects", currentLevel],
    queryFn: () => getCurrentUserSubjects({ id, level: currentLevel }),
  });

  const [subjects] = data ?? [{}];

  return { subjects, fetchingSubjects, id, level };
}

export default useFetchSubjects;
