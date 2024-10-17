import styles from "../modules/Logo.module.css";

function Logo() {
  return (
    <div className={styles.div}>
      <img src="/logo.jpg" alt="esut logo" className={styles.logo} />
    </div>
  );
}

export default Logo;
