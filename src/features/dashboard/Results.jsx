import useResults from "../../hooks/useResults";
import Button from "../../ui/Button";
import styles from "../../modules/Results.module.css";
import InputArea from "../../ui/InputArea";
import Table from "../../ui/Table";
import Filter from "../../ui/Filter";

function Results() {
  const { updateGrade, courses, isLoading, getGradePoint, gpa } = useResults();

  return (
    <div className={styles.results}>
      <section className={styles.header}>
        <h1>Results</h1>

        <Filter
          filterField="semester"
          options={[
            { value: "firstsemester", label: "First Semester" },
            { value: "secondsemester", label: " Second Semester" },
          ]}
        />
      </section>

      <div>
        {courses?.length > 0 && (
          <>
            <Table session={"First "}>
              <Table.Head type="results" array={["Course", "Code", "Grade"]} />
              <Table.Body type="result">
                {courses.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.code}</td>
                    <td>
                      <InputArea>
                        <input
                          disabled={isLoading}
                          name={item.code}
                          onBlur={updateGrade}
                          defaultValue={item.grade.toUpperCase()}
                        />
                      </InputArea>
                    </td>
                  </tr>
                ))}
              </Table.Body>
            </Table>

            {gpa && (
              <p>
                Your current grade point unit is {Math.round(gpa * 10) / 10}
              </p>
            )}
            <div className={styles.btn}>
              <Button
                onClick={getGradePoint}
                variation={"medium"}
                gradient={"primary"}
              >
                calculate Grade point
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Results;
