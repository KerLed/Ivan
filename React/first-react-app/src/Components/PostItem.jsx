import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="posts">
      <div className="post__content">
        <div className="post__description">
          <strong>
            {props.number + "."} {props.post.title}{" "}
          </strong>
          <p> {props.post.body}</p>
        </div>

        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
