import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<h1>Hello Robofriends</h1>, document.getElementById("root"));

serviceWorker.unregister();
