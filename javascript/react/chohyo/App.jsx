import {useState} from "react";
import { useContext } from "react";
import {ColoredMessage} from "./components/ColoredMessage.jsx";
import {MkTbody} from "./components/MkTbody.jsx";
import {MkTr} from "./components/MkTr.jsx";
import {MkSelectBox} from "./components/MkSelectBox.jsx";
import {MkP} from "./components/MkP.jsx";
import { AreaNumContext } from "./components/AreaNumProvider";
import { ElemContext } from "./components/ElemProvider";
import { FlvContext } from "./components/FlvProvider";
import { InitTimeContext } from "./components/InitTimeProvider";
import { MkThead } from "./components/MkThead.jsx";


export const App = () => {
	
	let kino = [100, 101, 102, 104];
	
	const {big_area_num} = useContext(AreaNumContext);
	const {elem} = useContext(ElemContext);
	const {flv} = useContext(FlvContext);
	const {init_time} = useContext(InitTimeContext);
	
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
			<h1 style = {{color : "red"}}>hello world</h1>
			<MkSelectBox></MkSelectBox>
			<MkP></MkP>
			<p>{file_name}</p>
			
			<table>
				
				<MkThead init_time={init_time} model="msm" elem="R3"></MkThead>
				<MkTbody big_area_num={big_area_num} tbody_datas={tbody_datas}></MkTbody>
			</table>
		</>
	);
};