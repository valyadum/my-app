import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div>
      My Post
      
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      <div className={s.post}>
        <Post />
        <Post />
      </div>
      
    </div>
  );
};

export default MyPost;
