import styles from "../modules/Input.module.css";

function Input({ label, type, placeholder, name, error }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default Input;
