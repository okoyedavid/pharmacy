import styles from "../../modules/About.module.css";
import EsutImg from "/Esut.png";

function AboutHead({ head }) {
  return (
    <div className={styles.about}>
      <h1 className={styles.titles}>{head.title}</h1>

      <article className={styles.article}>
        <img src={EsutImg} alt="Esut faculty image" className={styles.img} />
        <p>{head.info}</p>
      </article>
    </div>
  );
}

export default AboutHead;
