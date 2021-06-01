import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

const title = "React with Webpack and Babel";

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
