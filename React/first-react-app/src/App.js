import { useState } from "react";
import Counter from "./Components/Counter";
import "./styles/css/App.compressed.css";
import InputTitle from "./Components/InputTitle";
import PostList from "./Components/PostList";

function App() {
  const [posts, setposts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ]);

  const [posts2, setposts2] = useState([
    { id: 1, title: "Pyton", body: "Description" },
    { id: 2, title: "Pyton 2", body: "Description" },
    { id: 3, title: "Pyton 3", body: "Description" },
  ]);

  return (
    <div className="App">
      <Counter />
      <InputTitle />
      <PostList posts={posts} title="Посты по JS" />
      <PostList posts={posts2} title="Посты по Pyton" />
    </div>
  );
}

export default App;
