import cc from "../css/th.module.css"

export const MkTh2 = (props) => {

	const th_data = props.th_data;
	const col_num = props.col_num;
	const row_num = props.row_num;
	const color_class = cc.color1
	
	return (
		<>
			<th colSpan={col_num} rowSpan={row_num} className={color_class}>{th_data}</th>
		</>
	);
};