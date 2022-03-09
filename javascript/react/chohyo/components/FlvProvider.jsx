import { createContext, useState } from "react";

export const FlvContext = createContext({});

export const FlvProvider = props => {

	const {children} = props;
	
	const [flv, setFlv] = useState("FLV0");
	
	return(
		<FlvContext.Provider value={{ flv, setFlv }}>
			{children}
		</FlvContext.Provider>
	);

};