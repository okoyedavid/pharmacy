import styles from "../modules/Input.module.css";

function Input({ label, name, error, rules, register, ...rest }) {
  if (register === "")
    return (
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <input name={name} className={styles.input} {...rest} />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        name={name}
        className={styles.input}
        {...rest}
        {...register(name, rules)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default Input;
