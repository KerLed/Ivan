import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
  return (
    <div className="post_list">
      <h1
        style={{ textAlign: "center", marginTop: "40px" }}
        className="post_list_title"
      >
        {title}
      </h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;