import { useContext } from "react";
import { useRef } from 'react';

import { InitTimeContext } from "../provider/InitTimeProvider";

import { date_cal } from "../org_js/time.module.js";
import { make_init } from "../org_js/time.module.js";

export const MkSelectInitTime = () => {

	const {init_time, setInitTime} = useContext(InitTimeContext);
	const textRef = useRef(init_time);
	
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
			<input type="text" ref={textRef} maxLength="12" placeholder={init_time}></input>
			<button onClick={() => click_func(textRef.current.value)}>更新</button>
		</>
	);
};