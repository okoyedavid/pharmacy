import { Outlet } from "react-router-dom";
import styles from "../modules/Dashboard.module.css";
import Sidebar from "../ui/Sidebar";

function Dashboard() {
  return (
    <div className={styles.div}>
      <Sidebar />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
