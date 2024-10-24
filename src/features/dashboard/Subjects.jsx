import { memo } from "react";
import { useLoaderData } from "react-router-dom";
import styles from "../../modules/Subjects.module.css";

function Subjects() {
  const data = useLoaderData();

  const firstSemester = data.filter((item) => item.semester === "first");
  const secondSemester = data.filter((item) => item.semester === "second");

  return (
    <>
      <h1 className={styles.header}>Subjects currently being offered</h1>

      <h2 className={styles.caption}>First Semester</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Units</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {firstSemester.map((item) => (
            <tr key={item.id}>
              <td>{item.code}</td>
              <td>{item.title}</td>
              <td>{item.units}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className={styles.line} />

      <h2 className={styles.caption}>Second Semester</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Units</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {secondSemester.map((item) => (
            <tr key={item.id}>
              <td>{item.code}</td>
              <td>{item.title}</td>
              <td>{item.units}</td>
              <td>{item.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default memo(Subjects);
