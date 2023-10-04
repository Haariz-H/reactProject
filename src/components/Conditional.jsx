import React from "react";

function Conditional() {
  let name = "Yagami";
  let gender = "Female";
  let sal;
  if (gender === "Male") {
    sal = "Mr.";
  } else if (gender === "Female") {
    sal = "Ms.";
  }
  return (
    <div>
      Welcome, {sal}
      {name}
    </div>
  );
}

export default Conditional;
