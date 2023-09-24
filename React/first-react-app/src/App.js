import { useState } from "react";
import Counter from "./Components/Counter";
import "./styles/css/App.compressed.css";
import InputTitle from "./Components/InputTitle";
import PostList from "./Components/PostList";
import Addpostform from "./Components/Add_post_form";

function App() {
  const [posts, setposts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const removePost = (post) => {
    setposts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Counter />
      <InputTitle />
      <Addpostform posts={posts} setposts={setposts} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Посты по JS" />
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Посты не найдены{" "}
        </h1>
      )}
    </div>
  );
}

export default App;
