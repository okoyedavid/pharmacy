import { HiLogout } from "react-icons/hi";
import Modal from "./Modal";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Store/userSlice";
import ConfirmAction from "./ConfirmAction";

function Logout({ styles }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onLogout() {
    dispatch(logOut());

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
