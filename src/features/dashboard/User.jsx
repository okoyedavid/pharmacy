import { useSelector } from "react-redux";
import styles from "../../modules/User.module.css";
import { selectUser } from "../../Store/userSlice";
import avatar from "/avatar.webp";
import { calculateAge } from "../../services/helper";

function User() {
  const state = useSelector(selectUser);
  const {
    currentLevel,
    name,
    email,
    location,
    state: stateOfOrigin,
    bio,
    dateofbirth,
    quote,
    profileImg,
  } = state.userInfo;
  const { status } = state;

  const age = calculateAge(dateofbirth);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <img src={profileImg || avatar} className={styles.Profile_image} />
        </div>

        <div className={styles.headerText}>
          <h1 className={styles.header}>{name}</h1>
          <h2> current class: {currentLevel} </h2>
          {status === "Admin" && <span>{status}</span>}
        </div>
      </header>
      <div className={styles.division}>
        <hr className={styles.line} />
        <p> {name.split(" ")?.[1] || name.split(" ")?.[0]}</p>
        <hr className={styles.line} />
      </div>
      <section className={styles.info}>
        <h3>favorite quote: {quote}</h3>
        <h4>Email Address: {email}</h4>
        <h4>Age: {age}</h4>

        <h4>state of origin: {stateOfOrigin} </h4>
        <h4>Location:{location}</h4>

        <h4>Bio: {bio}</h4>
      </section>
    </div>
  );
}

export default User;
