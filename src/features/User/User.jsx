import styles from "../../modules/User.module.css";
import { redirect, useLoaderData } from "react-router-dom";
import avatar from "/user_images/egemba.jpg";

function User() {
  const user = useLoaderData();
  const profile = user.schoolInfo;

  return (
    <div className={styles.login}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>

      <header>
        <img src={avatar} className={styles.Profile_image} />
        <h1 className={styles.header}>{user.userInfo.name}</h1>
        <h2>class: {profile.level} level</h2>

        <h2 className={styles.gradePoint}>
          Grade point average: {profile.currentGP}
        </h2>
      </header>

      <div className={styles.info}>
        <h3>
          Admitted:
          <span>{profile.AdmissionYear} </span>
        </h3>

        <h2>
          {" "}
          carryovers:
          {profile.carryOvers.subjects.map((item, index) => (
            <span key={index}> {item}</span>
          ))}
        </h2>
      </div>
    </div>
  );
}

export default User;

export function loader() {
  if (!localStorage.getItem("state")) return redirect("/login");

  const state = localStorage.getItem("state");

  return JSON.parse(state);
}
