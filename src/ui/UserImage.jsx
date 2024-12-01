import { useSelector } from "react-redux";
import avatar from "/avatar.webp";
import { selectUser } from "../Store/userSlice";
import { Link } from "react-router-dom";

function UserImage() {
  const state = useSelector(selectUser);
  const { profileImg } = state.userInfo;
  return (
    <Link to={"/dashboard"}>
      <img
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          marginRight: "10px",
          border: `1px solid var(--cta-clr-2)`,
        }}
        src={profileImg || avatar}
        alt="profile image"
      />
    </Link>
  );
}

export default UserImage;
