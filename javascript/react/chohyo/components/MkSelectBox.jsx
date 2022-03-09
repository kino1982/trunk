import { useContext } from "react";
import { useRef } from 'react';
import { AreaNumContext } from "./AreaNumProvider";
import { ElemContext } from "./ElemProvider";
import { FlvContext } from "./FlvProvider";
import { InitTimeContext } from "./InitTimeProvider";
import { date_cal } from "../org_js/time.module.js";
import { make_init } from "../org_js/time.module.js";

export const MkSelectBox = () => {
	
	const {big_area_num, setBigAreaNum} = useContext(AreaNumContext);
	const {elem, setElem} = useContext(ElemContext);
	const {flv, setFlv} = useContext(FlvContext);
	const {init_time, setInitTime} = useContext(InitTimeContext);
	
	const textRef = useRef(init_time);
	
	const selectChange = (e) =>{
		setBigAreaNum(e.target.value)
	};
	
	const selectElem = (e) =>{
		setElem(e.target.value)
	};
	
	const selectFlv = (e) =>{
		setFlv(e.target.value)
	};
	
	const click_func = (val) =>{
		setInitTime(val);
	}
	
	const calc_date = (time_str, inc) => {
		setInitTime(date_cal(time_str, inc))
	}
	
	const new_date = (inc) => {
		setInitTime(make_init(inc))
	}
	
	return (
		<>
			<button onClick={() => calc_date(init_time, -3)}>＜</button>
			<button onClick={() => new_date(3)}>最新</button>
			<button onClick={() => calc_date(init_time, 3)}>＞</button>
			<input type="text" ref={textRef} maxlength="12" placeholder={init_time}></input>
			<button onClick={() => click_func(textRef.current.value)}>更新</button>
			
			<label for="area">地域</label>
			<select id="area" onChange={(e) => selectChange(e)}>
				<option value="0000">関東甲信</option>
				<option value="0001">東海</option>
			</select>
			
			<label for="elem">要素</label>
			<select id="elem" onChange={(e) => selectElem(e)}>
				<option value="R1">R1</option>
				<option value="R3">R3</option>
			</select>
			
			<label for="flv">FLV</label>
			<select id="flv" onChange={(e) => selectFlv(e)}>
				<option value="FLV0">FLV0</option>
				<option value="FLV1">FLV1</option>
			</select>
			
		</>
	);
};