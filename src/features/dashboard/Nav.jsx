import { HiBookOpen, HiCreditCard, HiPencilAlt, HiUser } from "react-icons/hi";
import styles from "../../modules/Nav.module.css";
import { NavLink } from "react-router-dom";
import { FaChartArea } from "react-icons/fa";
import Logout from "../../ui/Logout";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <NavLink className={styles.NavLink} to="/dashboard/user">
            <HiUser /> <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${styles.NavLink} ${styles.active}`}
            to="/dashboard/edit"
          >
            <HiPencilAlt /> <span>Edit profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.NavLink} to="/dashboard/payments">
            <HiCreditCard /> <span>Fees</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.NavLink} to="/dashboard/subjects">
            <HiBookOpen /> <span>Subjects</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.NavLink} to="/dashboard/results">
            <FaChartArea /> <span>Results</span>
          </NavLink>
        </li>
        <li>
          <Logout styles={styles} />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
