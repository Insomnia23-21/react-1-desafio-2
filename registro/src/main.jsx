import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-info">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
