import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const AddPostForm = (props) => {
  const [post, setpost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();

    props.setposts([...props.posts, { ...post, id: Date.now() }]);

    setpost({ title: "", body: "" });
  };

  return (
    <div className="add_post">
      <form className="add_post_form">
        <MyInput
          value={post.title}
          onChange={(e) => setpost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setpost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    </div>
  );
};

export default AddPostForm;
