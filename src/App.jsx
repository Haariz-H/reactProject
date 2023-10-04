import React from "react";

function App() {
  let characters = ["Levi", "Yagami", "Light", "Annie"];

  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2">
            <img src="johan.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2">
            <img src="tenma.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2">
            <img src="dan.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <ul>
        {characters.map((character) => (
          <li>{character}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
