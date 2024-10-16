import styles from "../modules/MainLayout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
