import styles from "../modules/Form.module.css";

function Form({ children, onSubmit }) {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}

export default Form;
