import Avatar from "./Avatar/Avatar";
import MyPost from "./MyPost/MyPost";
import s from "./Profile.module.css";


const Profile = (props) => {
  return (
    <div className={s.content}>
      <Avatar />
      <MyPost posts={props.state.posts}/>
    </div>
  );
};

export default Profile;
