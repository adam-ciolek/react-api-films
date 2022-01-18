import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { MyStorage } from "./context";

ReactDom.render(
	<React.StrictMode>
		<MyStorage>
			<Router>
				<App />
			</Router>
		</MyStorage>
	</React.StrictMode>,
	document.getElementById("root")
);
