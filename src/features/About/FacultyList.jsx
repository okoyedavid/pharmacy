import Faculties from "./Faculties";
import styles from "../../modules/FacultyList.module.css";
import useAbout from "./useAbout";
import SpinnerFullPage from "../../ui/SpinnerFullPage";

function FacultyList() {
  const { departments, isLoading } = useAbout();

  if (isLoading) return <SpinnerFullPage />;

  return (
    <section className={styles.faculty}>
      <h2> Our faculty consists of {departments?.length} departments</h2>

      <ul>
        {departments?.map((faculty) => (
          <Faculties faculty={faculty} key={faculty.id} />
        ))}
      </ul>
    </section>
  );
}

export default FacultyList;
