import {MkTd} from "./MkTd.jsx";

export const MkTr = (props) => {

	const tr_ary = props.tr_ary;
	const td_bline_sw = props.td_bline_sw;
	
	
	const tr_data = tr_ary.map((data,index)=>
									<MkTd td_data={data}></MkTd>
								)
	
	return (
		<>
			<tr>{tr_data}</tr>
		</>
	);
};