export const MkTh2 = (props) => {

	const th_data = props.th_data;
	const col_num = props.col_num;
	const row_num = props.row_num;
	
	const style = {
		marginTop: "1em",
		marginBottom: "1em",
		borderCollapse: "collapse",
		fontSize: "0.9em",
		border: "solid #ffffff 1px",
		padding: "0.1em 0.3em 0.1em 0.3em",
		whiteSpace: "nowrap",
		lineHeight: "1.4em",
		textAlign: "center",
		padding: "0.1em",
		backgroundColor: "#6060c0",
		color: "white",
		fontWeight: "normal",
	}
	
	return (
		<>
			<th colSpan={col_num} rowSpan={row_num} style={style}>{th_data}</th>
		</>
	);
};