//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx";
import  "../styles/index.css"
// include your styles into the webpack bundle


//import your own components


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
