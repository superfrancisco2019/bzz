import "./App.css";
import React, { useState } from "react";
import img from "./images/bee.jpeg";

function App() {

  const getRandomPoint = (elementWidth, elementHeight) => {
    let x = (Math.random() * (window.innerWidth - elementWidth)).toFixed();
    let y = (Math.random() * (window.innerHeight - elementHeight)).toFixed();
    return {
      x: x + "px",
      y: y + "px",
    };
  };

  const [jump, setJump] = useState ({style : {top:'70px', left:'30px'}})

  function jumped (event) {
    let point = getRandomPoint(100, 50);
    setJump({
      style: {
        top: point.y,
        left: point.x
      }
    });
  }

  return (
    <div className="App">
      <h1>Bzz Bzz Catch me if u can</h1>
        <img
          className="bee"
          src={img}
          onMouseEnter={ jumped } style={ jump.style }>
        </img>
      </div>

  );
}

export default App;