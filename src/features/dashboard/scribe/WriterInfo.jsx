import styles from "../../../modules/HealthScribe.module.css";
function WriterInfo() {
  return (
    <div className={styles.writerInfo}>
      <img src="/avatar.webp" className={styles.writerImage} alt="" />

      <div>
        <h2 className={styles.writerName}>chikamso gentility</h2>
      </div>
    </div>
  );
}

export default WriterInfo;
