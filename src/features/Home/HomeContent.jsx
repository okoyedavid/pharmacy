import styles from "../../modules/HomeContent.module.css";
import parm from "/parm.jpg";
import { useEffect } from "react";

function HomeContent() {
  useEffect(() => {
    const home = document.querySelector(`.${styles.homeContent}`);

    const timerContent = setTimeout(() => {
      home.style.opacity = 1;
    }, 1000);

    return () => {
      clearTimeout(timerContent);
    };
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.overlay}></div>
      <div className={styles.img}></div>

      <div className={styles.homeContent}>
        <h1>Welcome to the Faculty of Pharmaceutical Sciences, ESUT</h1>
        <p className={styles.motto}>
          <span>Motto:</span> As Men of Honour, we join hands
        </p>
      </div>
    </div>
  );
}

export default HomeContent;
