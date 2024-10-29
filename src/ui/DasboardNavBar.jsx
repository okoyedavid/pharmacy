import { GrResources } from "react-icons/gr";
import { FaPrescription } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SmallScreenNav from "./SmallScreenNav";
import styles from "../modules/Dashboard.module.css";
import Modal from "./Modal";

function DashboardNavBar() {
  return (
    <div className={styles.navBar}>
      <Modal>
        <SmallScreenNav />
      </Modal>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to={"/dashboard/resources"}>
            <GrResources /> Resources
          </NavLink>
        </li>
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
