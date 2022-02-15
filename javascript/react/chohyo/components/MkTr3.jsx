import {MkTd} from "./MkTd.jsx";
import {MkTh} from "./MkTh.jsx";
import {MkTh2} from "./MkTh2.jsx";


export const MkTr3 = (props) => {
	
	const th_data1 = props.th_data1;
	const th_data2 = props.th_data2;
	const col_num = props.col_num;
	const row_num = props.row_num;
	const td_data_ary = props.td_data_ary;
	
	let td_ary = [];
	
	for (let ii=0; ii<td_data_ary.length; ii++){
		td_ary.push(<MkTd td_data={td_data_ary[ii]}></MkTd>)
	}
	
	
	return (
		<>
				<MkTh2 th_data={th_data1} col_num={col_num} row_num={row_num}></MkTh2>
				<MkTh th_data={th_data2}></MkTh>
				{td_ary}
		</>
	);
};