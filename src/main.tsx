import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<Router>
				<App />
			</Router>
		</I18nextProvider>
	</React.StrictMode>
);
