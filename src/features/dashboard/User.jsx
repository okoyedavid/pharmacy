import { useSelector } from "react-redux";
import styles from "../../modules/User.module.css";
import { selectUser } from "../../Store/userSlice";
import avatar from "/avatar.webp";

function User() {
  const state = useSelector(selectUser);
  const { currentLevel, name } = state.userInfo;

  return (
    <>
      <header className={styles.header}>
        <div>
          <p>Profile</p>
          <img src={avatar} className={styles.Profile_image} />
        </div>
        <div className={styles.headerText}>
          <h1 className={styles.header}>{name}</h1>
          <h2>class: {currentLevel} </h2>
        </div>
      </header>
      <div className={styles.division}>
        <hr className={styles.line} />
        <p>About</p>
        <hr className={styles.line} />
      </div>
      <section>
        {/* {user?.currentGP && (
          <h4 className={styles.gradePoint}>
            Current Grade point average: {user.currentGP}
          </h4>
        )} */}

        <h3>favorite food: LoveBite</h3>
        <h3>favorite quote: if Lovebite they bring am </h3>
        <h4></h4>
      </section>
    </>
  );
}

export default User;
