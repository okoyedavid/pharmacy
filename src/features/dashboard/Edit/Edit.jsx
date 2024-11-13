import styles from "../../../modules/Edit.module.css";
import { selectUser } from "../../../Store/userSlice";
import { useSelector } from "react-redux";

import EditProfile from "./EditProfile";
import EditPassword from "./EditPassword";

function Edit() {
  const state = useSelector(selectUser);

  function submitform2() {
    console.log("clicked");
  }
  return (
    <div className={styles.edit}>
      <h2>Edit profile</h2>

      <EditProfile userInfo={state.userInfo} />
      <EditPassword email={state.userInfo.email} submitForm={submitform2} />
    </div>
  );
}

export default Edit;
