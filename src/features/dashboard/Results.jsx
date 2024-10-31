import useResults from "../../hooks/useResults";
import Button from "../../ui/Button";
import styles from "../../modules/Results.module.css";
import InputArea from "../../ui/InputArea";
import { useSearchParams } from "react-router-dom";

function Results() {
  const { updateResult, courses, getGradePoint, gpa } = useResults();

  const [searchParams, setSearchParams] = useSearchParams();

  function handleSemester({ target }) {
    searchParams.set("semester", target.value);
    setSearchParams(searchParams);
    localStorage.removeItem("semester");
  }

  return (
    <>
      <h1>Results</h1>

      <div>
        <select className={styles.select} value={""} onChange={handleSemester}>
          <option value=""> select current semester </option>
          <option value="firstsemester"> First Semester </option>
          <option value="secondsemester"> Second Semester </option>
        </select>
      </div>

      <div>
        {courses?.length > 0 && (
          <>
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Code</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.code}</td>
                    <td>
                      <InputArea>
                        <input
                          name={item.code}
                          onBlur={updateResult}
                          defaultValue={item.grade.toUpperCase()}
                        />
                      </InputArea>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {gpa && (
              <p>
                Your current grade point unit is {Math.round(gpa * 10) / 10}
              </p>
            )}
            <div className={styles.btn}>
              <Button
                onClick={getGradePoint}
                variation={"medium"}
                type={"primary"}
              >
                calculate Grade point
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Results;
