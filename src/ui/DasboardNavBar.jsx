import { NavLink, useLocation } from "react-router-dom";
import { FaPrescription } from "react-icons/fa";

import { selectUser } from "../Store/userSlice";
import { useSelector } from "react-redux";

import styles from "../modules/Dashboard.module.css";
import SmallScreenNav from "./SmallScreenNav";
import avatar from "/avatar.webp";
import Modal from "./Modal";
import Logout from "./Logout";

function DashboardNavBar() {
  const state = useSelector(selectUser);
  const { profileImg } = state.userInfo;

  const { pathname } = useLocation();
  return (
    <div className={styles.navBar}>
      <Modal>
        <SmallScreenNav />
      </Modal>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to={"/dashboard/scribe"}>
            <FaPrescription /> HealthScribe
          </NavLink>
        </li>

        {pathname === "/dashboard"
          ? null
          : pathname !== "/dashboard/user" && (
              <li className={styles.user}>
                <img src={profileImg || avatar} alt="profile image" />
              </li>
            )}

        <li className={styles.navItem}>
          <Logout styles={styles} />
        </li>
      </ul>
    </div>
  );
}

export default DashboardNavBar;
