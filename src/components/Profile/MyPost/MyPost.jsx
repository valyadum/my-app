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
        <Post message ='Hi, how are you?' like = '43'/>
        <Post message = "It's my first post" like = '98'/>
      </div>
      
    </div>
  );
};

export default MyPost;
