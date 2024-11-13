import styles from "../modules/Button.module.css";

function Button({ children, gradient, variation, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`${styles[gradient]} ${styles[variation]} ${styles.button}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
