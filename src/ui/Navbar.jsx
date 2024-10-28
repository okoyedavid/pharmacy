import styles from "../modules/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { HiMail } from "react-icons/hi";
function Navbar() {
  const { pathname } = useLocation();
  const state = localStorage.getItem("state");

  return (
    <>
      <nav className={styles.nav}>
        <Logo logo="navLogo" />
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
              <NavLink to={pathname === "/login" ? "signup" : "login"}>
                <Button type={"primary"} variation={"medium"}>
                  {pathname === "/login" ? "signup" : "login"}
                </Button>
              </NavLink>
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
