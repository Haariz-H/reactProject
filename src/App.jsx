import React from "react";
// import gender from "./components/gender";
// import Home from "./pages/Home";
// import About from "./pages/About";
import Gender from "./components/Gender";
// import Todo from "./pages/Todo";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const todos = ["Download node js", "Install Vs Code", "Install prettier"];
  return (
    <>
      {/* <Todo img="tenma.jpg" name="Tenma" todos={todos}></Todo> */}
      <Gender />
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/todo" element={<Todo />} />
    //     {/* <Route path="/about" element={<About />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
