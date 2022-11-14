import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className= {s.content}>
      <img className={s.paperless} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      <div>
        {/* <img src="https://tinypng.com/images/social/website.jpg" /> */}
        discription
      </div>
      <MyPost />
    </div>
  );
};

export default Profile;
