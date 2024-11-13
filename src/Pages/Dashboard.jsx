import { Outlet } from "react-router-dom";
import styles from "../modules/Dashboard.module.css";
import Sidebar from "../ui/Sidebar";
import DashboardNavBar from "../ui/DasboardNavBar";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.main}>
        <DashboardNavBar />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
