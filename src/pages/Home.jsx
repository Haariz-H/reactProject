import React from "react";
// import List from "../components/List";
// import Carousel from "../components/Carousel";
import Cards from "../components/Cards";
function Home() {
  return (
    <div>
      <div className="container">
        <div className="card-group">
          <Cards
            img="../johan.jpg"
            title="Johan"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem est eaque, voluptatem voluptatibus officia itaque
            odit odio eveniet, quos quas quae eius! Eligendi dolorem minima
            adipisci excepturi assumenda hic et."
            likes={1000}
            dislike={10}
          ></Cards>
          <Cards
            img="../tenma.jpg"
            title="Tenma"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem est eaque, voluptatem voluptatibus officia itaque
            odit odio eveniet, quos quas quae eius! Eligendi dolorem minima
            adipisci excepturi assumenda hic et."
            likes={1000}
            dislike={10}
          ></Cards>
        </div>
      </div>
    </div>
  );
}

export default Home;
