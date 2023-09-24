import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  return (
    <div className="post_list">
      <h1
        style={{ textAlign: "center", marginTop: "40px" }}
        className="post_list_title"
      >
        {title}
      </h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
