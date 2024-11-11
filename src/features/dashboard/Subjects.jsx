import { memo } from "react";
import styles from "../../modules/Subjects.module.css";
import useFetchSubjects from "../../hooks/useFetchSubjects";
import SpinnerFullPage from "../../ui/SpinnerFullPage";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setLevel } from "../../Store/userSlice";
import Table from "../../ui/Table";
import Levels from "../../ui/levels";

function Subjects() {
  const { subjects, fetchingSubjects } = useFetchSubjects();
  const user = useSelector(selectUser);
  const [searchParams, setSearchParams] = useSearchParams();
  const header = [" Course Code", " Course Title", " Units", " Grade"];
  const dispatch = useDispatch();

  function handleClick({ target }) {
    searchParams.set("level", target.value);
    setSearchParams(searchParams);
    dispatch(setLevel(target.value));
    localStorage.removeItem("semester");
  }

  const {
    level,
    userInfo: { currentLevel },
  } = user;

  if (fetchingSubjects) return <SpinnerFullPage />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {level === currentLevel ? (
          <h1> Subjects currently being offered</h1>
        ) : (
          <h1> {level} subjects</h1>
        )}
        <Levels
          className={styles.select}
          value={level}
          onChange={handleClick}
        />
      </div>

      <Table session={"First"}>
        <Table.Head array={header} />

        <Table.Body semester={subjects.firstsemester} />
      </Table>

      <Table session={"Second"}>
        <Table.Head array={header} />

        <Table.Body semester={subjects.secondsemester} />
      </Table>
    </div>
  );
}

export default memo(Subjects);
