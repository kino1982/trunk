import {MkTd} from "./MkTd.jsx";
import {MkTh2} from "./MkTh2.jsx";

export const MkTr2 = (props) => {
	
	const th_data = props.th_data;
	const td_data_ary = props.td_data_ary;
	const td_bline_sw = props.td_bline_sw;
	const init_time = props.init_time;
	const elem = props.elem;
	const model = props.model;
	
	let td_ary = [];
	
	for (let ii=0; ii<td_data_ary.length; ii++){
		td_ary.push(<MkTd td_data={td_data_ary[ii]} td_bline_sw={td_bline_sw}></MkTd>);
	}
	
	return (
		<>
			<tr>
				<MkTh2 th_data={th_data} col_num="1" row_num="1"></MkTh2>
				{td_ary}
			</tr>
		</>
	);
};