import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="mainlayout">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
