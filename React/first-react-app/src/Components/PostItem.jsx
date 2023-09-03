import React from "react";

const PostItem = (props) => {
  return (
    <div className="posts">
      <div className="post__content">
        <div className="post__description">
          <strong>
            {props.post.id} {props.post.title}{" "}
          </strong>
          <p> {props.post.body}</p>
        </div>

        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
