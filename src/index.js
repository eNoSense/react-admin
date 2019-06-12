import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Admin from "./admin";
import Home from "./pages/demo-router/route2/router";

ReactDOM.render(<Home />, document.getElementById("root"));
