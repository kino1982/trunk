import { useContext } from "react";
import { ElemContext } from "../provider/ElemProvider";

export const MkSelectElem = () => {

	const {elem, setElem} = useContext(ElemContext);
	
	const selectElem = (e) =>{
		setElem(e.target.value)
	};
	
	return (
		<>
			<label htmlFor="elem">要素</label>
			<select id="elem" onChange={(e) => selectElem(e)}>
				<option value="R1">R1</option>
				<option value="R3">R3</option>
				<option value="R24">R24</option>
			</select>
		</>
	);
};