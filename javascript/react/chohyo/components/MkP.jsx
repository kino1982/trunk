import { useContext } from "react";
import { AreaNumContext } from "./AreaNumProvider";

export const MkP = () => {
	
	const {big_area_num} = useContext(AreaNumContext);
	
	return (
		<>
			<p>{big_area_num}</p>
		</>
	);
};