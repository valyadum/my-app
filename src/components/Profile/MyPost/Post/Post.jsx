import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.items}>
      <img className={s.littleAva} src="https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=2000"/>
      {props.message}
        <div><img className={s.imgLike} src="https://www.iconpacks.net/icons/2/free-instagram-like-icon-3507-thumb.png"/> {props.like}</div>
    </div>
  );
};

export default Post;
