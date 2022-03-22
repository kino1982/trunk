import { createContext, useState } from "react";

export const MemberContext = createContext({});

export const MemberProvider = props => {

	const {children} = props;
	
	const [member, setMember] = useState("max");
	
	return(
		<MemberContext.Provider value={{ member, setMember }}>
			{children}
		</MemberContext.Provider>
	);

};