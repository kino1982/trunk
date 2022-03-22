import { useContext } from "react";
import { FlvContext } from "../provider/FlvProvider";

export const MkSelectFlv = () => {

	const {flv, setFlv} = useContext(FlvContext);
	
	const selectFlv = (e) =>{
		setFlv(e.target.value)
	};
	
	return (
		<>
			<label htmlFor="flv">FLV</label>
			<select id="flv" onChange={(e) => selectFlv(e)}>
				<option value="FLV0">FLV0</option>
				<option value="FLV1">FLV1</option>
				<option value="FLV2">FLV2</option>
				<option value="FLV3">FLV3</option>
			</select>
		</>
	);
};