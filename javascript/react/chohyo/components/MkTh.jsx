export const MkTh = (props) => {

	const th_data = props.th_data;
	
	const thstyle = {
		backgroundColor: "green",
		border: "1px solid black"
	}
	
	return (
		<>
			<th style={thstyle}>{th_data}</th>
		</>
	);
};