import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className= {s.content}>
      <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      <div>
        <img src="https://tinypng.com/images/social/website.jpg" />
        discription
      </div>
      <div>
        my post
        <div>new post</div>
      </div>
      <div>
        <div>post1</div>
        <div>post 2</div>
      </div>
    </div>
  );
};

export default Profile;
