import {
  HiBookOpen,
  HiCreditCard,
  HiLogout,
  HiPencilAlt,
  HiUser,
} from "react-icons/hi";
import styles from "../../modules/Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChartArea } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logOut } from "../../Store/userSlice";

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logOut());

    navigate("/");
  }

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
          <button onClick={handleLogout} className={styles.btn}>
            <HiLogout /> <span>Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
