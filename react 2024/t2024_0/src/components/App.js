import React from "react";
import Header from "./Header";
import Image from "./image";
import logo from "../img/Logo.png";

class App extends React.Component {
  render() {
    return (
      <div className="name">
        <Header />
        <Image image={logo} alt="#" />
        <p>bbbbbaaa3</p>
      </div>
    );
  }
}

export default App;
