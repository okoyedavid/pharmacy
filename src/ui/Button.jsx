import styles from "../modules/Button.module.css";

function Button({ children, type, variation, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`${styles[type]} ${styles[variation]} ${styles.button}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
