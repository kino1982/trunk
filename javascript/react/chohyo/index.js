import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import { AreaNumProvider } from "./provider/AreaNumProvider.jsx";
import { ElemProvider } from "./provider/ElemProvider.jsx";
import { FlvProvider } from "./provider/FlvProvider.jsx";
import { MemberProvider } from "./provider/MemberProvider.jsx";
import { InitTimeProvider } from "./provider/InitTimeProvider.jsx";

ReactDOM.render(
	<AreaNumProvider>
		<ElemProvider>
			<FlvProvider>
				<InitTimeProvider>
					<MemberProvider>
						<App />
					</MemberProvider>
				</InitTimeProvider>
			</FlvProvider>
		</ElemProvider>
	</AreaNumProvider>, 
	document.getElementById("root"));

