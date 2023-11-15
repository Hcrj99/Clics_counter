import React from "react";
import '../styles/Counter.css'

function Counter({ clicNumber }){
  return (
    <div className="counter"> 
      {clicNumber}
    </div>
  );
}

export default Counter;
