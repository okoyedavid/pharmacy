import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaPrescription } from "react-icons/fa";

import { selectUser } from "../Store/userSlice";
import { useSelector } from "react-redux";

import styles from "../modules/Dashboard.module.css";
import SmallScreenNav from "./SmallScreenNav";
import avatar from "/avatar.webp";
import Modal from "./Modal";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

function DashboardNavBar() {
  const state = useSelector(selectUser);
  const navigate = useNavigate();
  const { profileImg } = state.userInfo;

  function handleLogout() {
    navigate("/");
  }

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
          <button className={styles.logout} onClick={handleLogout}>
            <HiArrowRightOnRectangle />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DashboardNavBar;
