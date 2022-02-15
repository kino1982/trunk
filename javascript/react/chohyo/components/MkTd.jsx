import kino from "../css/td.module.css"

export const MkTd = (props) => {

	const td_data = props.td_data;
	
	let kino_color = kino.color1;
	
	if (td_data > 100){
		kino_color = kino.color1;
	}else{
		kino_color = kino.color2;
	};
	
	return (
		<>
			<td className={kino_color}>{td_data}</td>
		</>
	);
};