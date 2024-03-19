import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  <div>
    <h1>Hello</h1>;
  </div>;
}

function App() {
  return (
    <div className="name">
      <Header />
      <p>asd1313</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
