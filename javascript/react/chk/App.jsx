import {MkTableChk} from "./components/MkTableChk.jsx";
import axios from "axios";

export const App = () => {

	let tr_datas = [
						["10:00","10:15","スクワット10回<br>test"],
						["10:15","10:30","腕立て10回<br><font color='red'>testだよ</font>"],
						["10:30","10:50","腹筋10回"]
					];
	
	let tr_datas2 = {}
					
	axios
		.get("https://jsonplaceholder.typicode.com/todos/1")
		.then(res => console.log(res.data))
		.catch(err => console.error("json2"))
	
	
	return (
	
		<>
			<h1 style = {{color : "red"}}>hello world</h1>
			
			<MkTableChk hour="筋トレメニュー"tr_datas={tr_datas}></MkTableChk>
		</>
	);
};