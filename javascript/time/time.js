//@@@@@@@@@@@@@@@@@@@@@
// 時刻に関する関数群
//@@@@@@@@@@@@@@@@@@@@@

function date_cal(date_str, hour_str){
	//**************************************
	// yyyymoddhhmiの形で年月日時を受け取り、
	// 指定した時間を加減して、yyyymoddhhmi
	// の文字列で返す。
	//
	// date_str:yyyymoddhhmiの文字列
	// hh:加減する時間
	//**************************************

	yy = date_str.substr(0,4);
	mo = date_str.substr(4,2);
	dd = date_str.substr(6,2);
	hh = date_str.substr(8,2);
	mi = date_str.substr(10,2);

	var tmp_str = `${yy}/${mo}/${dd} ${hh}:${mi}:00`;

	var date = new Date(tmp_str);

	date.setHours(date.getHours() + hour_str);

	out_yy = date.getFullYear();
	out_mo = date.getMonth() + 1;
	out_dd = date.getDate();
	out_hh = date.getHours();
	out_mi = date.getMinutes();	

	//０埋めをする
	out_mo = ('00' + out_mo).slice(-2);
	out_dd = ('00' + out_dd).slice(-2);
	out_hh = ('00' + out_hh).slice(-2);
	out_mi = ('00' + out_mi).slice(-2);

	out_time_str = `${out_yy}${out_mo}${out_dd}${out_hh}${out_mi}`;

	return out_time_str;
}

function time_now(id){
	//******************************* 
	// 現在時刻を指定したidの箇所に
	// 表示。
	// jqueryを使用。
	//
	// id:html中のid
	//*******************************

	var now = new Date();

	$(id).text(now.toLocaleString());

}
