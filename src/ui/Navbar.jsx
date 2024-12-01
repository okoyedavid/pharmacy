import styles from "../modules/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { HiMail } from "react-icons/hi";
import { FaPrescription } from "react-icons/fa";

import { selectIsUserAuthenticated, selectRole } from "../Store/userSlice";
import { useSelector } from "react-redux";

import SearchBlog from "./SearchBlog";
import { GiNewspaper } from "react-icons/gi";
function Navbar() {
  const { pathname } = useLocation();
  const isAuthenticated = useSelector(selectIsUserAuthenticated);
  const currentRole = useSelector(selectRole);

  const onScribe = pathname === "/scribe";

  const loggedIN = isAuthenticated && currentRole === "authenticated";

  return (
    <>
      <nav className={styles.nav}>
        <Logo logo="navLogo" />
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.email}`}>
            {onScribe ? (
              <h2 className={styles.scribe}>
                PANS SCRIBE <GiNewspaper />
              </h2>
            ) : (
              <>
                <HiMail /> info@esut.edu.ng
              </>
            )}
          </li>
          {onScribe ? (
            <SearchBlog />
          ) : (
            <li className={styles.navItem}>
              <NavLink to={"/about"}>About us</NavLink>
            </li>
          )}

          {onScribe ? null : (
            <li className={styles.navItem}>
              <NavLink to={"/scribe"}>
                <FaPrescription /> HealthScribe
              </NavLink>
            </li>
          )}

          <li className={styles.navItem}>
            {loggedIN ? (
             <div></div>
            ) : (
              <NavLink to={pathname === "/login" ? "signup" : "login"}>
                <Button gradient={"primary"} variation={"medium"}>
                  {pathname === "/login" ? "signup" : "login"}
                </Button>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
