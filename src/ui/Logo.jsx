import { Link } from "react-router-dom";
import styles from "../modules/Logo.module.css";

function Logo() {
  return (
    <div className={styles.div}>
      <Link to={"/"}>
        <img src="/logo.jpg" alt="esut logo" className={styles.logo} />
      </Link>
    </div>
  );
}

export default Logo;
