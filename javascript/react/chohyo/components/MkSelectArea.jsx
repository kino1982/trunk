import { useContext } from "react";
import { AreaNumContext } from "../provider/AreaNumProvider";

export const MkSelectArea = () => {

	const {area_num, setAreaNum} = useContext(AreaNumContext);
	
	const selectAreaNum = (e) =>{
		setAreaNum(e.target.value)
	};
	
	return (
		<>
			<label htmlFor="area">地域</label>
			<select id="area" onChange={(e) => selectAreaNum(e)}>
				<option value="0000">関東甲信</option>
				<option value="0001">東海</option>
				<option value="0002">四国</option>
			</select>
		</>
	);
};