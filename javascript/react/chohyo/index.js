import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import { AreaNumProvider } from "./components/AreaNumProvider.jsx";
import { ElemProvider } from "./components/ElemProvider.jsx";
import { FlvProvider } from "./components/FlvProvider.jsx";
import { InitTimeProvider } from "./components/InitTimeProvider.jsx";

ReactDOM.render(
	<AreaNumProvider>
		<ElemProvider>
			<FlvProvider>
				<InitTimeProvider>
					<App />
				</InitTimeProvider>
			</FlvProvider>
		</ElemProvider>
	</AreaNumProvider>, 
	document.getElementById("root"));

