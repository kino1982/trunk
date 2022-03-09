import { useContext } from "react";
import { AreaNumContext } from "./AreaNumProvider";
import { ElemContext } from "./ElemProvider";
import { FlvContext } from "./FlvProvider";

export const MkP = () => {
	
	const {big_area_num} = useContext(AreaNumContext);
	const {elem} = useContext(ElemContext);
	const {flv} = useContext(FlvContext);
	
	return (
		<>
			<p>{big_area_num}</p>
			<p>{elem}</p>
			<p>{flv}</p>
		</>
	);
};