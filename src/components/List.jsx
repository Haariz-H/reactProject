import React from "react";

function List() {
  let characters = ["Levi", "Yagami", "Light", "Annie"];
  return (
    <div>
      <div className="container">
        <ul className="list-group">
          {characters.map((character) => (
            <li className="list-group-item">{character}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
