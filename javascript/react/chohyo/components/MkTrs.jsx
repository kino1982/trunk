import {MkTr2} from "./MkTr2.jsx";
import {MkTr3} from "./MkTr3.jsx";
import {fuken_name_dic} from "../org_js/var.module.js"
import {area_name_dic} from "../org_js/var.module.js"

export const MkTrs = (props) => {
	
	const th_data1 = props.th_data1;
	const tr_datas = props.tr_datas;
	const init_time = props.init_time;
	const model = props.model;
	const elem = props.elem;
	const row_num = tr_datas.length;
	
	
	let fuken_name = fuken_name_dic[th_data1];
	
	let area_name_ary = area_name_dic[fuken_name];
	
	let trs = []
	
	if (tr_datas.length === 0){
		trs.push(<MkTr3 th_data1={fuken_name} th_data2={area_name_ary[0]} row_num={row_num} td_data_ary={tr_datas[0] } ></MkTr3>);
	}else{
		for(let ii = 0; ii < tr_datas.length; ii++){
			if(ii === 0){
				trs.push(<MkTr3 th_data1={fuken_name} th_data2={area_name_ary[ii]} row_num={row_num} td_data_ary={tr_datas[ii]} init_time={init_time} model={model} elem={elem}></MkTr3>);
			}else if(ii === tr_datas.length - 1){
				trs.push(<MkTr2 th_data={area_name_ary[ii]} td_data_ary={tr_datas[ii]} td_bline_sw={true} init_time={init_time} model={model} elem={elem}></MkTr2>);
			}else{
				trs.push(<MkTr2 th_data={area_name_ary[ii]} td_data_ary={tr_datas[ii]} td_bline_sw={false} init_time={init_time} model={model} elem={elem}></MkTr2>);
			}
		}
	}
	return (
		<>
			{trs}
		</>
	);
};