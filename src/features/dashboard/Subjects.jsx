import { memo } from "react";
import styles from "../../modules/Subjects.module.css";
import useFetchSubjects from "../../hooks/useFetchSubjects";
import SpinnerFullPage from "../../ui/SpinnerFullPage";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLevel } from "../../Store/userSlice";

function Subjects() {
  const { subjects, fetchingSubjects } = useFetchSubjects();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  function handleClick({ target }) {
    searchParams.set("level", target.value);
    setSearchParams(searchParams);
    dispatch(setLevel(target.value));
    localStorage.removeItem("semester");
  }
  const firstSemester = subjects.firstsemester;
  const secondSemester = subjects.secondsemester;

  if (fetchingSubjects) return <SpinnerFullPage />;

  return (
    <>
      <h1 className={styles.header}>Subjects currently being offered</h1>
      <div>
        <select className={styles.select} value={""} onChange={handleClick}>
          <option value=""> select current semester </option>
          <option value="200lvl"> 200 lvl </option>
          <option value="300lvl"> 300 lvl </option>
          <option value="400lvl"> 400 lvl </option>
          <option value="500lvl"> 500 lvl </option>
        </select>
      </div>

      <h2 className={styles.caption}>First Semester</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.hide}>Course Code</th>
            <th>Course Title</th>
            <th>Units</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {firstSemester.map((item) => (
            <tr key={item.id}>
              <td className={styles.hide}>{item.code}</td>
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
            <th className={styles.hide}>Course Code</th>
            <th>Course Title</th>
            <th>Units</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {secondSemester.map((item) => (
            <tr key={item.id}>
              <td className={styles.hide}>{item.code}</td>
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
