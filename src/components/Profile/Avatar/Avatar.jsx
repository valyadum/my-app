import s from "./Avatar.module.css";

const Avatar = () => {
  return (
    <div className={s.avatar}>
      <img
        className={s.paperless}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
      />
      <div> ava+discription</div>
    </div>
  );
};

export default Avatar;
