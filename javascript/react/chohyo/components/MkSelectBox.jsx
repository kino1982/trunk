import { useContext } from "react";
import { AreaNumContext } from "./AreaNumProvider";

export const MkSelectBox = () => {
	
	const {big_area_num, setBigAreaNum} = useContext(AreaNumContext);
	
	const selectChange = (e) =>{
		setBigAreaNum(e.target.value)
	};
	
	return (
		<>
			<select onChange={(e) => selectChange(e)}>
				<option value="0000">関東甲信</option>
				<option value="0001">東海</option>
			</select>
		</>
	);
};