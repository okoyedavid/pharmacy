import { NavLink, useLocation } from "react-router-dom";
import { FaPrescription } from "react-icons/fa";

import styles from "../modules/Dashboard.module.css";
import SmallScreenNav from "./SmallScreenNav";
import Modal from "./Modal";
import Logout from "./Logout";
import UserImage from "./userImage";

function DashboardNavBar() {
  const { pathname } = useLocation();
  return (
    <div className={styles.navBar}>
      <Modal>
        <SmallScreenNav />
      </Modal>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to={"/scribe"}>
            <FaPrescription /> HealthScribe
          </NavLink>
        </li>

        {pathname === "/dashboard"
          ? null
          : pathname !== "/dashboard/user" && <UserImage />}

        <li className={styles.navItem}>
          <Logout styles={styles} />
        </li>
      </ul>
    </div>
  );
}

export default DashboardNavBar;
