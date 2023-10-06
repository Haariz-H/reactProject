import React from "react";
import "../pages/Home.css";
import { useState } from "react";

function Cards({ content, title, img, likes, dislike }) {
  const [likeCountIs, setLike] = useState(likes);
  const [dislikeCountIs, setDislike] = useState(dislike);
  function setLikeCount() {
    setLike(likeCountIs + 1);
  }
  function setDisLikeCount() {
    setDislike(dislikeCountIs + 1);
  }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="img-resize
       card-img-top"
        src={img}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <button className="btn" type="button" onClick={setLikeCount}>
          <i class="bi bi-balloon-heart"></i>
          {likeCountIs}
        </button>
        <button className="btn" type="button" onClick={setDisLikeCount}>
          <i class="bi bi-hand-thumbs-down"></i>
          {dislikeCountIs}
        </button>
        <button className="btn">
          <i class="bi bi-bookmark-heart" style={{ marginLeft: "10px" }}></i>
        </button>
      </div>
    </div>
  );
}

export default Cards;
