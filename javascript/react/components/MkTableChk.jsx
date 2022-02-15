import {MkTrChk} from "./MkTrChk.jsx"

export const MkTableChk = (props) => {

	const tr_datas = props.tr_datas;
	const hour = props.hour;
	
	let trs = []
	
	for(let ii = 0; ii < tr_datas.length; ii++){
			trs.push(<MkTrChk tr_data={tr_datas[ii]} ></MkTrChk>);
	}
	
	return (
		<>
			<p>{hour}</p>
			<table border="1">
				{trs}
			</table>
		</>
	);
};