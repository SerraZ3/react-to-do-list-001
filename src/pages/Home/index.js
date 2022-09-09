import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/to-do-list">To do list</Link>
      <br />
      <a href="/to-do-list">To do list</a>
    </div>
  );
}

export default Home;
