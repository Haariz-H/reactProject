import React from "react";

function NewCards(props) {
  const cardStyle = {
    width: "300px",
    backgroundColor: "black",
    border: "3px red",
    borderRadius: "10px",
    borderStyle: "solid",
  };
  const headStyle = {
    color: "yellow",
    fontSize: "20px",
    fontWeight: "bold",
  };
  const contentStyle = {
    color: "White",
    fontSize: "15px",
  };
  const footerStyle = {
    color: "blue",
    fontSize: "10px",
  };
  return (
    <div style={cardStyle}>
      <div style={headStyle}>{props.head}</div>
      <hr style={{ border: "2px solid yellow" }} />
      <div style={contentStyle}>{props.children}</div>
      <div style={footerStyle}>{props.date}</div>
    </div>
  );
}

export default NewCards;
