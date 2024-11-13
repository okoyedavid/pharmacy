import styles from "../modules/Input.module.css";

function InputArea({ label, error, children, newClass }) {
  return (
    <div className={`${styles.container} ${newClass}`}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default InputArea;
