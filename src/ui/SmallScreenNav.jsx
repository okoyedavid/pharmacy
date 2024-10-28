import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../modules/Nav.module.css";
import {
  HiBookOpen,
  HiCreditCard,
  HiMenu,
  HiPencilAlt,
  HiUser,
} from "react-icons/hi";
import Modal, { ModalContext } from "./Modal";
import { FaChartArea } from "react-icons/fa";
import Logo from "./Logo";

function SmallScreenNav() {
  const { close } = useContext(ModalContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        close();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [close]);

  return (
    <>
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
    </>
  );
}

export default SmallScreenNav;
