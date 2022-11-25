import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  let posts = [
    { id: 1, message: "Hi, how are you?", like: "43" },
    { id: 2, message: "It's my first post", like: "98" },
  ];

let postElement = posts.map(p => <Post message={p.message} like={p.like} />)

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
          {postElement}
      </div>
    </div>
  );
};

export default MyPost;
