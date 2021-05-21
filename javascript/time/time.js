//@@@@@@@@@@@@@@@@@@@@@
// 時刻に関する関数群
//@@@@@@@@@@@@@@@@@@@@@

function date_cal(date_str,hh){
	//**************************************
	// yyyymoddhhmiの形で年月日時を受け取り、
	// 指定した時間を加減して、yyyymoddhhmi
	// の文字列で返す。
	//
	// date_str:yyyymoddhhmiの文字列
	// hh:加減する時刻
	//**************************************

	yy = date_str.substr(0,4);
	mo = date_str.substr(4,2);
	dd = date_str.substr(6,2);
	hh = date_str.substr(8,2);
	mi = date_str.substr(10,2);

	var tmp_str = `${yy}/${mo}/${dd} ${hh}:${mi}:00`;

	console.log(tmp_str);

}
