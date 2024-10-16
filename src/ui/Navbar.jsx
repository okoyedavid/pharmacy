import styles from "../modules/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "/logo.jpg";

function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav>
        <NavLink to="/">
          <img src={logo} className={styles.navImg} />
        </NavLink>
        <ul className={styles.navList}>
          <li className={styles.navItem}>info@esut.edu.ng</li>
          <NavLink className={styles.navItem} to={"/about"}>
            About us
          </NavLink>
          <NavLink className={styles.navItem} to={"/portal"}>
            Portal
          </NavLink>

          <NavLink
            className={`${styles.navItem} ${
              location.pathname === "/dashboard/login" ? styles.login : ""
            }`}
            to="dashboard/login"
          >
            Login
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
