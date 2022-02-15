import {useState} from "react";
import {MkTdChk} from "./MkTdChk.jsx";
import {MkThChk} from "./MkThChk.jsx";

export const MkTrChk = (props) => {

	const tr_data = props.tr_data;
	
	const [value, setValue] = useState(false);
	
	console.log("test1")
	console.log(value);
	
	let bgc = "";
	
	if (value){
		bgc = "gray";
	}else{
		bgc = "white";
	}
	
	console.log("test2")
	console.log(value);
	
	return (
		<>
			<tr bgcolor={bgc}>
				<MkThChk value={value} setValue={setValue}></MkThChk>
				<MkTdChk td_data={tr_data[0]}></MkTdChk>
				<MkTdChk td_data={tr_data[1]}></MkTdChk>
				<MkTdChk td_data={tr_data[2]}></MkTdChk>
			</tr>
		</>
	);
};