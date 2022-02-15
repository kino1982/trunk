import cc from "../css/th.module.css"

export const MkTh = (props) => {

	const th_data = props.th_data;
	
	return (
		<>
			<th>{th_data}</th>
		</>
	);
};