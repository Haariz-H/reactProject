import React from "react";
import "../App.css";
import "./Carousel.css";

function Carousel() {
  const divStyle = {
    width: "25%",
    height: "20%",
  };
  return (
    <div>
      <div className="container">
        <div
          id="carouselExampleInterval"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" style={{ divStyle }}>
            <div className="carousel-item active" data-bs-interval="2">
              <img src="johan.jpg" className="img-resize " alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2">
              <img src="tenma.jpg" className="img-resize" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2">
              <img src="dan.jpg" className="img-resize" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <img src="tenma.jpg" alt="" /> */}
    </div>
  );
}

export default Carousel;
