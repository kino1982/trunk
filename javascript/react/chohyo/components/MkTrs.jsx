import {MkTr2} from "./MkTr2.jsx";
import {MkTr3} from "./MkTr3.jsx";
import {fuken_name_dic} from "../org_js/var.module.js"
import {area_name_dic} from "../org_js/var.module.js"

export const MkTrs = (props) => {
	
	const th_data1 = props.th_data1;
	const tr_datas = props.tr_datas;
	const col_num = props.col_num;
	const row_num = tr_datas.length;
	
	let fuken_name = fuken_name_dic[th_data1];
	
	let area_name_ary = area_name_dic[fuken_name];
	
	let trs = []
	
	for(let ii = 0; ii < tr_datas.length; ii++){
		if(ii === 0){
			trs.push(<MkTr3 th_data1={fuken_name} th_data2={area_name_ary[ii]} col_num={col_num} row_num={row_num} td_data_ary={tr_datas[ii]} ></MkTr3>);
		}else{
			trs.push(<MkTr2 th_data={area_name_ary[ii]} col_num="1" row_num="1" td_data_ary={tr_datas[ii]}></MkTr2>);
		}
	}
	
	return (
		<>
			{trs}
		</>
	);
};