import React from "react";
import { username, city } from "../data/user";


function Home() {
  return (
    <div id="home">
      <h1>
      <p>{username} is from {city}</p>

      </h1>
    </div>
  );
}
export default Home; // or Home, or About depending on the file

