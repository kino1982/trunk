import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import { AreaNumProvider } from "./components/AreaNumProvider.jsx";

ReactDOM.render(
	<AreaNumProvider>
		<App />
	</AreaNumProvider>, 
	document.getElementById("root"));

