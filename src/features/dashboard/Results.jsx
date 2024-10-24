import Input from "../../ui/Input";
import useResults from "../../hooks/useResults";
import Button from "../../ui/Button";
import styles from "../../modules/Results.module.css";

function Results() {
  const { updateResult, getSession, courses, getGradePoint, gpa } =
    useResults();

  return (
    <>
      <h1>Results</h1>

      <div>
        <select value={""} onChange={(e) => getSession(e.target.value)}>
          <option value=""> select current semester </option>
          <option value="first"> First Semester </option>
          <option value="second"> Second Semester </option>
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
                      <Input
                        name={item.code}
                        register={""}
                        onBlur={updateResult}
                        defaultValue={item.grade.toUpperCase()}
                      />
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
