import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", like: "43" },
    { id: 2, message: "It's my first post", like: "98" },
  ];
  return (
    <div className={s.mypost}>
      <h3>My Post</h3>
      <div>
        <textarea></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.post}>
        <Post message={postData[0].message} like={postData[0].like} />
        <Post message={postData[1].message} like={postData[1].like} />
      </div>
    </div>
  );
};

export default MyPost;
