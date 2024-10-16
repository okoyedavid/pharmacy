import styles from "../modules/MainLayout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },

          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: `var(--white-clr-1)`,
            color: `var(--blue-clr-2)`,
          },
        }}
      />
    </>
  );
}

export default MainLayout;
