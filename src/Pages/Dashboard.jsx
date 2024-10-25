import { Outlet } from "react-router-dom";
import styles from "../modules/Dashboard.module.css";
import Sidebar from "../ui/Sidebar";
import Topnav from "../ui/Topnav";

function Dashboard() {
  return (
    <div className={styles.div}>
      <Topnav />
      <div className={styles.Sidebar}>
        <Sidebar />
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
