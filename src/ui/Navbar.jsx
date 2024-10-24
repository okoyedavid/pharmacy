import styles from "../modules/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "/logo.jpg";
import Button from "./Button";
import { HiMail } from "react-icons/hi";

function Navbar() {
  const { pathname } = useLocation();
  const state = localStorage.getItem("state");

  return (
    <>
      <nav className={styles.nav}>
        <NavLink to="/">
          <img src={logo} className={styles.navImg} />
        </NavLink>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.email}`}>
            <HiMail /> info@esut.edu.ng
          </li>
          <li className={styles.navItem}>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to={"/portal"}>Portal</NavLink>
          </li>

          <li className={styles.navItem}>
            {!state ? (
              <Button type={"primary"} variation={"small"}>
                <NavLink to={pathname === "/login" ? "signup" : "login"}>
                  {pathname === "/login" ? "signup" : "login"}
                </NavLink>
              </Button>
            ) : (
              <NavLink to={"/dashboard/user"}>Profile Page</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
