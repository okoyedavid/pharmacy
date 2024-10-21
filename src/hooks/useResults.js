import { useDispatch } from "react-redux";
import { getSemester } from "../Store/userSlice";
import { fetchSubjects } from "../services/loaders";
import { supabase } from "../services/supabase";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function useResults() {
  const [courses, setCourses] = useState([]);
  const [gpa, setGpa] = useState(null);

  const dispatch = useDispatch();
  const regex = /^[a-fA-F]+$/;

  useEffect(() => {
    const storedData = localStorage.getItem("semester");
    if (storedData) {
      const currentSession = JSON.parse(storedData);
      setCourses(currentSession.subjects);
    }
  }, []);

  const updateResult = async (e) => {
    const { name, value } = e.target;
    const grade = value.toUpperCase();

    if (value && regex.test(value)) {
      const { data, error } = await supabase
        .from("200lvl 1st semester subjects")
        .update({ grade })
        .eq("code", name)
        .select("*");

      getSession(data[0].semester);

      if (error) throw new Error(" failed to update the grade");
    } else {
      toast.error("invalid grade must be between A and F");
    }
  };

  function getGradePoint() {
    const grade = courses.filter((item) => regex.test(item.grade));

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

  async function getSession(semester) {
    setGpa(null);
    const subjects = await fetchSubjects();
    const filteredSubjects = subjects.filter(
      (item) => item.semester === semester
    );
    setCourses(filteredSubjects);

    const session = { session: semester, subjects: filteredSubjects };
    localStorage.setItem("semester", JSON.stringify(session));
    dispatch(getSemester(semester));
  }
  return { updateResult, getSession, courses, getGradePoint, gpa };
}
export default useResults;
