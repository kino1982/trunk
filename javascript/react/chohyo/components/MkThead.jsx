import { MkTh } from "./MkTh.jsx";
import { MkTh2 } from "./MkTh2.jsx";
import { elem_hour_dic } from "../org_js/thead_var.module.js";
import { model_hour_dic } from "../org_js/thead_var.module.js";
import { date_cal } from "../org_js/time.module.js";


export const MkThead = (props) => {

	const init_time = props.init_time;
	const model = props.model;
	const elem = props.elem;
	
	const init_hour = init_time.substr(8,2);
	const start_ft = elem_hour_dic[elem];
	const end_ft = model_hour_dic[model][init_hour];
	
	let th_jst_ary = [];
	let th_day_ary = [];
	let tmp_time = "";
	let work_time = "";
	let tmp_hour = "";
	let count_row = 0;
	let count_row_ary = [];
	let tmp_day = "";
	let work_day = "";
	let day_ary = [];
	
	th_day_ary.push(<MkTh2 col_num="2" row_num="2" th_data="時刻（JST）"></MkTh2>);
	
	for (let ii=start_ft; ii<=end_ft; ii=ii+3){
		tmp_time = date_cal(init_time, ii + 9)
		
		tmp_hour = tmp_time.substr(8,2);
		tmp_hour = ('00' + tmp_hour).slice(-2);
		tmp_hour = "-" + tmp_hour;
		tmp_hour = tmp_hour.replace("00","24");
		
		tmp_day = tmp_time.substr(6,2);
		tmp_day = ('00' + tmp_day).slice(-2) + "日";
		
		if (ii !== end_ft){
			if (tmp_hour === "-24"){
				count_row = count_row + 1;
				work_time = date_cal(tmp_time, -24);
				work_day = work_time.substr(6,2);
				work_day = ('00' + work_day).slice(-2) + "日";
				
				day_ary.push(work_day);
				count_row_ary.push(count_row);
				count_row = 0;
			}else{
				count_row = count_row + 1;
			}
		}else{
			count_row = count_row + 1;
			day_ary.push(tmp_day);
			count_row_ary.push(count_row);
		}
		
		
		th_jst_ary.push(<MkTh th_data={tmp_hour}></MkTh>);
		
		console.log("ii=" + ii + ":end_ft=" + end_ft)
		
	}
	
	for(let ii=0; ii < day_ary.length; ii++){
		th_day_ary.push(<MkTh2 col_num={count_row_ary[ii]} row_num="1" th_data={day_ary[ii]}></MkTh2>);
	}
	
	return (
		<>
			<thead>
				<tr>{th_day_ary}</tr>
				<tr>{th_jst_ary}</tr>
			</thead>
		</>
	);
};