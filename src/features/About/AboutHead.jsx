import styles from "../../modules/About.module.css";
import SpinnerFullPage from "../../ui/SpinnerFullPage";
import useAbout from "./useAbout";
import EsutImg from "/Esut.png";

function AboutHead() {
  const { about: { title, info } = {}, isLoading } = useAbout();

  if (isLoading) return <SpinnerFullPage />;

  return (
    <div className={styles.about}>
      <h1 className={styles.titles}>{title}</h1>

      <article className={styles.article}>
        <img src={EsutImg} alt="Esut faculty image" className={styles.img} />
        <p>{info}</p>
      </article>
    </div>
  );
}

export default AboutHead;
