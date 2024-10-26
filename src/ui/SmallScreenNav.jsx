import { NavLink } from "react-router-dom";
import styles from "../modules/Nav.module.css";
import {
  HiBookOpen,
  HiCreditCard,
  HiMenu,
  HiPencilAlt,
  HiUser,
} from "react-icons/hi";
import Modal from "./Modal";
import { FaChartArea } from "react-icons/fa";
import Logo from "./Logo";

function SmallScreenNav() {
  return (
    <>
      <Modal>
        <Modal.Open name={"sideNav"}>
          <button>
            <HiMenu />
          </button>
        </Modal.Open>
        <Modal.Window name={"sideNav"}>
          <Logo />

          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li>
                <Modal.Close>
                  <NavLink className={styles.NavLink} to="/dashboard/user">
                    <HiUser /> <span>Home</span>
                  </NavLink>
                </Modal.Close>
              </li>
              <li>
                <Modal.Close>
                  <NavLink
                    className={`${styles.NavLink} ${styles.active}`}
                    to="/dashboard/edit"
                  >
                    <HiPencilAlt /> <span>Edit profile</span>
                  </NavLink>
                </Modal.Close>
              </li>
              <li>
                <Modal.Close>
                  <NavLink className={styles.NavLink} to="/dashboard/payments">
                    <HiCreditCard /> <span>Fees</span>
                  </NavLink>
                </Modal.Close>
              </li>
              <li>
                <Modal.Close>
                  <NavLink className={styles.NavLink} to="/dashboard/subjects">
                    <HiBookOpen /> <span>Subjects</span>
                  </NavLink>
                </Modal.Close>
              </li>
              <li>
                <Modal.Close>
                  <NavLink className={styles.NavLink} to="/dashboard/results">
                    <FaChartArea /> <span>Results</span>
                  </NavLink>
                </Modal.Close>
              </li>
            </ul>
          </nav>
        </Modal.Window>
      </Modal>
    </>
  );
}

export default SmallScreenNav;
