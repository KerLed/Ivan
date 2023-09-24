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

  return (
    <div className="App">
      <Counter />
      <InputTitle />
      <Addpostform posts={posts} setposts={setposts} />
      <PostList posts={posts} title="Посты по JS" />
    </div>
  );
}

export default App;
