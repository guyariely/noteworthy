import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "normalize.css/normalize.css";
import "draft-js/dist/Draft.css";
import "./styles/_base.scss";
import "./styles/_setting.scss";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
