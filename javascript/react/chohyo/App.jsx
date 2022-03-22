import {useState} from "react";
import { useContext } from "react";

import { AreaNumContext } from "./provider/AreaNumProvider";
import { ElemContext } from "./provider/ElemProvider";
import { FlvContext } from "./provider/FlvProvider";
import { MemberContext } from "./provider/MemberProvider";
import { InitTimeContext } from "./provider/InitTimeProvider";

import {MkTbody} from "./components/MkTbody.jsx";
import {MkTr} from "./components/MkTr.jsx";
import {MkForm} from "./components/MkForm.jsx";
import {MkP} from "./components/MkP.jsx";
import { MkThead } from "./components/MkThead.jsx";


export const App = () => {
	
	let kino = [100, 101, 102, 104];
	
	const {big_area_num} = useContext(AreaNumContext);
	const {elem} = useContext(ElemContext);
	const {flv} = useContext(FlvContext);
	const {member} = useContext(MemberContext);
	const {init_time} = useContext(InitTimeContext);
	
	const style = {
		marginTop:"1em",
		marginBottom:"1em",
		borderCollapse:"collapse"
	}
	
	let kino_data = {
						"0000":{
								"01":[
										[100,100,101,101,101,101,101,101,101,101,101,101,101,102], 
										[101,101,101,101,101,101,101,101,101,101,101,101,101,102],
										[102,102,101,101,101,101,101,101,101,101,101,101,101,102],
										[103,103,101,101,101,101,101,101,101,101,101,101,101,102]
									],
								"02":[
										[200,200,101,101,101,101,101,101,101,101,101,101,101,102],
										[201,201,101,101,101,101,101,101,101,101,101,101,101,102],
										[202,202,101,101,101,101,101,101,101,101,101,101,101,102]
									]
						},
						"0001":{
								"03":[
										[100,100,101,101,101,101,101,101,101,101,101,101,101,102], 
										[101,101,101,101,101,101,101,101,101,101,101,101,101,102],
										[102,102,101,101,101,101,101,101,101,101,101,101,101,102],
										[103,103,101,101,101,101,101,101,101,101,101,101,101,102]
									],
								"04":[
										[200,200,101,101,101,101,101,101,101,101,101,101,101,102],
										[201,201,101,101,101,101,101,101,101,101,101,101,101,102],
										[202,202,101,101,101,101,101,101,101,101,101,101,101,102]
									]
						}
	}
	
	let tbody_datas = kino_data[big_area_num];
	
	let file_name = `${init_time}_${elem}_${flv}.json`;

	return (
	
		<>
			<MkForm></MkForm>
			<MkP></MkP>
			<p>{file_name}</p>
			
			<table style={style}>
				<MkThead init_time={init_time} model="msm" elem="R3"></MkThead>
				<MkTbody big_area_num={big_area_num} tbody_datas={tbody_datas}></MkTbody>
			</table>
		</>
	);
};