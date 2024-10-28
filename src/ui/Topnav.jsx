import styles from "../modules/Topnav.module.css";
import { GrResources } from "react-icons/gr";
import { FaPrescription } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SmallScreenNav from "./SmallScreenNav";
import Modal from "./Modal";

function Topnav() {
  return (
    <div className={styles.container}>
      <Modal>
        <SmallScreenNav />
      </Modal>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <GrResources />{" "}
          <NavLink to={"/dashboard/resources"}>Resources</NavLink>
        </li>
        <li className={styles.navItem}>
          <FaPrescription />{" "}
          <NavLink to={"/dashboard/scribe"}>HealthScribe</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Topnav;
