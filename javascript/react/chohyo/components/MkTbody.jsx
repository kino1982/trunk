import {MkTrs} from "./MkTrs.jsx";
import {big_area_num_dic} from "../org_js/var.module.js"

export const MkTbody = (props) => {
	
	const big_area_num = props.big_area_num;
	const tbody_datas = props.tbody_datas;
	
	let fuken_num_ary = big_area_num_dic[big_area_num];

	let tbodys = []
	
	for(let ii = 0; ii < fuken_num_ary.length; ii++){
			tbodys.push(<MkTrs th_data1={fuken_num_ary[ii]} col_num="1" tr_datas={tbody_datas[fuken_num_ary[ii]]} ></MkTrs>);
	}
	
	return (
		<>
			<tbody>
				{tbodys}
			</tbody>
		</>
	);
};