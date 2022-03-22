import { createContext, useState } from "react";
import { make_init } from "../org_js/time.module.js";

export const InitTimeContext = createContext({});

export const InitTimeProvider = props => {

	const {children} = props;
	
	const [init_time, setInitTime] = useState(make_init(6));
	
	return(
		<InitTimeContext.Provider value={{ init_time, setInitTime }}>
			{children}
		</InitTimeContext.Provider>
	);

};