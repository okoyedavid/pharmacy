import Nav from "../features/dashboard/Nav";
import Logo from "../Pages/Logo";
import styles from "../modules/Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Logo />
      <Nav />
    </aside>
  );
}

export default Sidebar;
