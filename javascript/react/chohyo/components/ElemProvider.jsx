import { createContext, useState } from "react";

export const ElemContext = createContext({});

export const ElemProvider = props => {

	const {children} = props;
	
	const [elem, setElem] = useState("R1");
	
	return(
		<ElemContext.Provider value={{ elem, setElem }}>
			{children}
		</ElemContext.Provider>
	);

};