export const MkThChk = (props) => {
	
	const value = props.value;
	let setValue = props.setValue;
	
	const myfunc = () => {
		setValue(!value)
	};
	
	return (
		<>
			<th><input type="checkbox" onChange={myfunc}></input></th>
		</>
	);
};