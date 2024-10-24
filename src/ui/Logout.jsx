import { HiLogout } from "react-icons/hi";
import Modal from "./Modal";
import { logout as logoutApi } from "../services/ApiAuth";
import { useNavigate } from "react-router-dom";
import ConfirmAction from "./ConfirmAction";

function Logout({ styles }) {
  const navigate = useNavigate();

  function onLogout() {
    logoutApi();
    navigate("/");
  }

  return (
    <Modal>
      <Modal.Open name="logout">
        <button className={styles.btn}>
          <HiLogout /> <span>Logout</span>
        </button>
      </Modal.Open>

      <Modal.Window name="logout">
        <ConfirmAction onConfirm={onLogout} type={"logout"} />
      </Modal.Window>
    </Modal>
  );
}

export default Logout;
