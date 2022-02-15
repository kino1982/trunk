import {useState} from "react";
import { useContext } from "react";
import {ColoredMessage} from "./components/ColoredMessage.jsx";
import {MkTbody} from "./components/MkTbody.jsx";
import {MkSelectBox} from "./components/MkSelectBox.jsx";
import {MkP} from "./components/MkP.jsx";
import { AreaNumContext } from "./components/AreaNumProvider";


export const App = () => {

	const [num, setNum] = useState(0);

	const onClickButton = () => {
		setNum(num + 1);
	};
	
	let kino = [100, 101, 102, 104];
	
	const {big_area_num} = useContext(AreaNumContext);
	
	let kino_data = {
						"0000":{
								"01":[[100,100], [101,101],[102,102],[103,103]],
								"02":[[200,200],[201,201],[202,202]]
						},
						"0001":{
								"03":[[100,100], [101,101],[102,102],[103,103]],
								"04":[[200,200],[201,201],[202,202]]
						}
	}
	
	let tbody_datas = kino_data[big_area_num];
	
	console.log(tbody_datas);

	return (
	
		<>
			<h1 style = {{color : "red"}}>hello world</h1>
			<ColoredMessage color="blue" >お元気ですか？</ColoredMessage>
			<button onClick={onClickButton}>ボタン</button>
			<ColoredMessage color="pink" >元気です</ColoredMessage>
			<p>{num}</p>
			<MkSelectBox></MkSelectBox>
			<MkP></MkP>
			<table>
				<thead>
					<MkTr tr_ary={kino}></MkTr>
				</thead>
				<MkTbody big_area_num={big_area_num} tbody_datas={tbody_datas}></MkTbody>
			</table>
	);
};