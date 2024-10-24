import styles from "../modules/Input.module.css";

function InputArea({ label, error, children }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {children}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default InputArea;
