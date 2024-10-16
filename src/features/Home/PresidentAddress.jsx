import styles from "../../modules/PresidentAddress.module.css";
import avatar from "/user_images/jamie.jpg";

function PresidentAdress() {
  return (
    <article className={styles.address}>
      <header className={styles.header}>
        <h1 className="president_title">The President Igatta James Address</h1>
        <p>
          <span>(A.K.A Gentility Nwannem)</span>
        </p>
      </header>
      <div className={styles.content}>
        <img src={avatar} className={styles.image} />
        <p className={styles.addressText}>
          I am highly delighted to welcome you to the Faculty of Pharmaceutical
          science, Enugu State University, Agbani website.
          <br />
          The Faculty website provides an opportunity to keep sharing news about
          the Faculty, staff, students and alumni. It will also provide
          information on research, teaching and various ongoing activities in
          the Faculty. I assumed office as President on the 1st of march 2023
          after the successful completion of the tenure of the immediate past
          pharm Arinze. It is noted that the Faculty has benefitted immensely
          from the previous Presidents who have served meritoriously in laying a
          solid foundation that have made it possible to contribute to the
          growth of pharmacy education in Nigeria. The Faculty through its high
          quality of research and teaching has trained over 3000 pharmacists who
          are globally engaged in different sectors of pharmacy and allied
          professions. The Faculty runs postgraduate programmes in all her
          departments. The Faculty of Pharmacy was first established as a
          Department in the year 2000. We sincerely appreciate the tremendous
          support we are receiving from different Class sets of the Esut
          Pharmacy Alumni that have made it possible to improve the quality of
          education we are giving to our students. It is a great honor and
          privilege to serve the school of Pharmacy Esut, Nigeria as the
          President. We welcome you to our website Best regards
        </p>
      </div>

      <footer className={styles.footer}>
        <p> Pharm. Igatta james, </p>
        <p>President of the Faculty of Pharmaceutical sciences 2023-2024</p>
      </footer>
    </article>
  );
}
export default PresidentAdress;
