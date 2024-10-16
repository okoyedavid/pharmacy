import styles from "../../modules/Faculties.module.css";
function Faculties({ faculty }) {
  return (
    <li className={styles.list}>
      <img src={faculty.img} className={styles.image} />
      <div className={styles.body}>
        <h1>{faculty.department}</h1>
        <p>{faculty.description}</p>
        <hr />
      </div>
    </li>
  );
}

export default Faculties;
