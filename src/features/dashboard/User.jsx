import styles from "../../modules/User.module.css";
import { useLoaderData } from "react-router-dom";
import avatar from "/user_images/egemba.jpg";

function User() {
  const user = useLoaderData();
  const profile = user.schoolInfo;

  return (
    <>
      <header className={styles.header}>
        <div>
          <p>Profile</p>
          <img src={avatar} className={styles.Profile_image} />
        </div>
        <div className={styles.headerText}>
          <h1 className={styles.header}>{user.userInfo.name}</h1>
          <h2>class: {profile.level} level</h2>
        </div>
      </header>
      <div className={styles.division}>
        <hr className={styles.line} />
        <p>About</p>
        <hr className={styles.line} />
      </div>
      <section>
        {profile?.currentGP && (
          <h4 className={styles.gradePoint}>
            Current Grade point average: {profile.currentGP}
          </h4>
        )}

        <h3>favorite food: LoveBite</h3>
        <h3>favorite quote: if Lovebite they bring am </h3>
        <h4></h4>
      </section>
    </>
  );
}

export default User;
