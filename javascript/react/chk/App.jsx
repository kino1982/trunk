import {MkTableChk} from "./components/MkTableChk.jsx";

export const App = () => {

	let tr_datas = [
						["10:00","10:15","スクワット10回"],
						["10:15","10:30","腕立て10回"],
						["10:30","10:50","腹筋10回"]
					];
	return (
	
		<>
			<h1 style = {{color : "red"}}>hello world</h1>
			
			<MkTableChk hour="11時"tr_datas={tr_datas}></MkTableChk>
		</>
	);
};