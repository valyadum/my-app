import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";


const MyPost = (props) => {

let postElement = props.posts.map(p => <Post message={p.message} like={p.like} />)

let newPostElement = React.createRef();

let addPost = ()=>{
  let text = newPostElement.current.value;
  alert(text);
}

  return (
    <div className={s.mypost}>
      <h3>My Post</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
        <div>
          <button onClick={ addPost}>Add post</button>
        </div>
      </div>
      <div className={s.post}>
          {postElement}
      </div>
    </div>
  );
};

export default MyPost;
