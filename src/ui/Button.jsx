import styles from "../modules/Button.module.css";

function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}

export default Button;
