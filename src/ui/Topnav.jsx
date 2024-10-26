import styles from "../modules/Topnav.module.css";
import { GrResources } from "react-icons/gr";
import { FaPrescription } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SmallScreenNav from "./SmallScreenNav";

function Topnav() {
  return (
    <div className={styles.container}>
      <SmallScreenNav />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <GrResources /> <NavLink>Resources</NavLink>
        </li>
        <li className={styles.navItem}>
          <FaPrescription /> <NavLink>HealthScribe</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Topnav;
