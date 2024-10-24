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
          I am excited to welcome you to the official website of the
          Pharmaceutical Association of Nigerian Students, a student
          organization within the Faculty of Pharmaceutical Sciences at Enugu
          State University of Science and Technology. This website is a resource
          for information about our Association, Faculty, research initiatives,
          educational activities, and various ongoing events. It has been an
          honor to serve as President of this Association and Faculty.
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
