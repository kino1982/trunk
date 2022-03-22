import { useContext } from "react";
import { MemberContext } from "../provider/MemberProvider";

export const MkSelectMember = () => {

	const {member, setMember} = useContext(MemberContext);
	
	const selectMember = (e) =>{
		setMember(e.target.value)
	};
	
	return (
		<>
			<label htmlFor="member">メンバー</label>
			<select id="member" onChange={(e) => selectMember(e)}>
				<option value="max">最大値</option>
				<option value="75p">75%値</option>
				<option value="ave">平均値</option>
				<option value="25p">25%値</option>
				<option value="min">最小値</option>
				<option value="00">00</option>
				<option value="01p">01p</option>
				<option value="01m">01m</option>
				<option value="02p">02p</option>
				<option value="02m">02m</option>
				<option value="03p">03p</option>
				<option value="03m">03m</option>
				<option value="04p">04p</option>
				<option value="04m">04m</option>
				<option value="05p">05p</option>
				<option value="05m">05m</option>
				<option value="06p">06p</option>
				<option value="06m">06m</option>
				<option value="07p">07p</option>
				<option value="07m">07m</option>
				<option value="08p">08p</option>
				<option value="08m">08m</option>
				<option value="09p">09p</option>
				<option value="09m">09m</option>
				<option value="10p">10p</option>
				<option value="10m">10m</option>
				<option value="11p">11p</option>
				<option value="11m">11m</option>
				<option value="12p">12p</option>
				<option value="12m">12m</option>
				<option value="13p">13p</option>
				<option value="13m">13m</option>
				<option value="14p">14p</option>
				<option value="14m">14m</option>
				<option value="15p">15p</option>
				<option value="15m">15m</option>
				<option value="16p">16p</option>
				<option value="16m">16m</option>
				<option value="17p">17p</option>
				<option value="17m">17m</option>
				<option value="18p">18p</option>
				<option value="18m">18m</option>
				<option value="19p">19p</option>
				<option value="19m">19m</option>
				<option value="20p">20p</option>
				<option value="20m">20m</option>
				<option value="21p">21p</option>
				<option value="21m">21m</option>
				<option value="22p">22p</option>
				<option value="22m">22m</option>
				<option value="23p">23p</option>
				<option value="23m">23m</option>
				<option value="24p">24p</option>
				<option value="24m">24m</option>
				<option value="25p">25p</option>
				<option value="25m">25m</option>
			</select>
		</>
	);
}