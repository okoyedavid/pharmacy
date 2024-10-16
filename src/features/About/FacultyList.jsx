import Faculties from "./Faculties";
import styles from "../../modules/FacultyList.module.css";

function FacultyList({ faculty }) {
  return (
    <section className={styles.faculty}>
      <h2> Our faculty consists of {faculty.length} departments</h2>

      <ul>
        {faculty.map((faculty) => (
          <Faculties faculty={faculty} key={faculty.id} />
        ))}
      </ul>
    </section>
  );
}

export default FacultyList;
