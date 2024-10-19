import styles from "../modules/Button.module.css";

function Button({ children, type, variation, onClick, ...rest }) {
  return (
    <button
      onClick={onClick}
      {...rest}
      className={`${styles[type]} ${styles[variation]}`}
    >
      {children}
    </button>
  );
}

export default Button;
