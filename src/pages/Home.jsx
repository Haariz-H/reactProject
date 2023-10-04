import React from "react";
import List from "../components/List";
import Carousel from "../components/Carousel";
function Home() {
  return (
    <div>
      <div className="container">
        <Carousel />
      </div>

      <h1>
        <div className="container">
          <List />
        </div>
      </h1>
    </div>
  );
}

export default Home;
