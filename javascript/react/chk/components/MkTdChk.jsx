export const MkTdChk = (props) => {

	const td_data = props.td_data;
	
	return (
		<>
			<td dangerouslySetInnerHTML={{ __html:td_data}}></td>
		</>
	);
};