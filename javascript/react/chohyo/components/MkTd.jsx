export const MkTd = (props) => {

	const td_data = props.td_data;
	const td_lineb_sw = props.td_bline_sw;
	const td_liner_sw = props.td_rline_sw;
	
	let cell_color = "";
	let class_name_str = "";
	
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
		padding: "0.1em"
	}
	
	if (td_data > 100){
		cell_color = "";
	}else{
		cell_color = "";
	};
	
	if(td_lineb_sw){
		style["borderBottom"] = "solid #a0a0a0 1px";
	}
	
	return (
		<>
			<td style={style}>{td_data}</td>
		</>
	);
};