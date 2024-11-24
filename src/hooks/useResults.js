import { supabase } from "../services/supabase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useFetchSubjects from "./useFetchSubjects";
import { fetchConstantValue } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useResults() {
  const [courses, setCourses] = useState([]);
  const [gpa, setGpa] = useState(null);
  const { subjects, id, level } = useFetchSubjects();
  const [searchParams] = useSearchParams();
  const semester = searchParams.get("semester") || "firstsemester";
  const gradeRegex = fetchConstantValue("grade");
  const query = useQueryClient();
  useEffect(() => {
    const storedData = localStorage.getItem("semester");
    if (storedData) {
      const currentSession = JSON.parse(storedData);
      setCourses(currentSession.subjects);
    }
  }, []);

  useEffect(() => {
    function getSession() {
      setGpa(null);
      const filteredSubjects = subjects[semester];

      setCourses(filteredSubjects);

      const session = { session: semester, subjects: filteredSubjects };
      localStorage.setItem("semester", JSON.stringify(session));
    }

    getSession();
  }, [semester, subjects]);

  const updateResult = async (e) => {
    const otherSemester =
      semester === "firstsemester" ? "secondsemester" : "firstsemester";
    const { name, value } = e.target;
    const grade = value.toUpperCase();

    if (gradeRegex.test(value)) {
      const newResult = courses.map((item) => {
        if (item.code === name) return { ...item, grade };
        return item;
      });
      const { data, error } = await supabase
        .from("users")
        .update({
          [level]: [
            {
              [semester]: newResult,
              [otherSemester]: subjects[otherSemester],
            },
          ],
        })
        .eq("user_id", id)
        .select(level);

      if (error) throw new Error("There was an Error uploading results");

      return data;
    } else {
      toast.error("Grade is invalid! must be between A - F");
    }
  };

  function getGradePoint() {
    const grade = courses.filter((item) => gradeRegex.test(item.grade));

    if (grade.length !== courses.length) {
      toast.error(
        "Grade point cannot be calculated until all results are filled"
      );
      return;
    }

    const specialCodes = ["PCT 231", "PCT 291", "PCL 413"];

    const specialgrade = {
      a: 5,
      b: 4,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
    };

    const gradePoints = {
      a: 5,
      b: 4,
      c: 3,
      d: 0,
      e: 0,
      f: 0,
    };

    const scores = grade.map((item) => {
      const gradeLower = item.grade.toLowerCase();

      if (specialCodes.includes(item.code)) {
        return specialgrade[gradeLower];
      }

      return gradePoints[gradeLower];
    });

    const credits = grade.map((item) => {
      return item.units;
    });

    let totalScore = 0,
      totalCredits = 0;
    for (let i = 0; i < scores.length; i++) {
      totalScore += scores[i] * credits[i];
      totalCredits += credits[i];
    }
    setGpa(totalScore / totalCredits);
  }

  const { mutate: updateGrade, isLoading } = useMutation({
    mutationFn: updateResult,
    onSuccess: () => {
      query.invalidateQueries("subjects");
    },
    onError: () => {
      toast.error("There was an Error uploading results");
    },
  });

  return { updateGrade, isLoading, courses, getGradePoint, gpa };
}
export default useResults;
