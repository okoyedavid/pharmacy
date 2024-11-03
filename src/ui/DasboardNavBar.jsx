import { GrResources } from "react-icons/gr";
import { FaPrescription } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import SmallScreenNav from "./SmallScreenNav";
import styles from "../modules/Dashboard.module.css";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { selectUser } from "../Store/userSlice";

function DashboardNavBar() {
  const state = useSelector(selectUser);
  const { name, profileImg } = state.userInfo;

  const { pathname } = useLocation();
  return (
    <div className={styles.navBar}>
      <Modal>
        <SmallScreenNav />
      </Modal>

      <ul className={styles.navList}>
        {pathname !== "/dashboard/user" && (
          <li className={styles.user}>
            <img src={profileImg} alt="" />
            <span>{name.split(" ")[0]}</span>
          </li>
        )}
        {/* <li className={styles.navItem}>
          <NavLink to={"/dashboard/resources"}>
            <GrResources /> Resources
          </NavLink>
        </li> */}
        <li className={styles.navItem}>
          <NavLink to={"/dashboard/scribe"}>
            <FaPrescription /> HealthScribe
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashboardNavBar;
