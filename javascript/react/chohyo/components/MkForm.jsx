import { MkSelectInitTime } from "./MkSelectInitTime.jsx";
import { MkSelectArea } from "./MkSelectArea.jsx";
import { MkSelectElem } from "./MkSelectElem.jsx";
import { MkSelectFlv } from "./MkSelectFlv.jsx";
import { MkSelectMember } from "./MkSelectMember.jsx";

export const MkForm = () => {
	
	return (
		<>
			<MkSelectInitTime></MkSelectInitTime>
			<MkSelectArea></MkSelectArea>
			<MkSelectElem></MkSelectElem>
			<MkSelectMember></MkSelectMember>
			<MkSelectFlv></MkSelectFlv>
			
		</>
	);
};