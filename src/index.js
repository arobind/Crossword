import React from "react";
import ReactDOM from "react-dom";
import CrossWord from "./crossword.js";

import "./styles.css";

function App(props) {
  return (
    <div>
        <CrossWord />
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
