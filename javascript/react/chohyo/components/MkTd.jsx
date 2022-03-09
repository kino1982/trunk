import kino from "../css/td.module.css";

export const MkTd = (props) => {

	const td_data = props.td_data;
	const td_bline_sw = props.td_bline_sw;
	const td_rline_sw = props.td_rline_sw;
	
	let kino_color = kino.color1;
	
	if (td_data > 100){
		kino_color = kino.color1;
	}else{
		kino_color = kino.color2;
	};
	
	if(td_bline_sw){
		kino_color = kino_color + " " + kino.bline;
	}
	
	return (
		<>
			<td className={kino_color}>{td_data}</td>
		</>
	);
};