import { createContext, useState } from "react";

export const AreaNumContext = createContext({});

export const AreaNumProvider = props => {

	const {children} = props;
	
	const [big_area_num, setBigAreaNum] = useState("0000");
	
	return(
		<AreaNumContext.Provider value={{ big_area_num, setBigAreaNum }}>
			{children}
		</AreaNumContext.Provider>
	);

};