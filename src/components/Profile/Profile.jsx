import Avatar from "./Avatar/Avatar";
import MyPost from "./MyPost/MyPost";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <Avatar />
      <MyPost />
    </div>
  );
};

export default Profile;
