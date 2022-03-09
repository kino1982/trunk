export const MkTh2 = (props) => {

	const th_data = props.th_data;
	const col_num = props.col_num;
	const row_num = props.row_num;
	
	const th2style = {
		backgroundColor: "green",
		border: "1px solid black"
	}
	
	
	return (
		<>
			<th colSpan={col_num} rowSpan={row_num} style={th2style}>{th_data}</th>
		</>
	);
};