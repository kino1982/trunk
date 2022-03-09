export const make_init = (num) =>{
	//**************************************
	// 現在時刻（UTC）に最も近い、指定した
	// 倍数の時刻を求めて、yyyymoddhhmi
	// の文字列で返す。
	//
	// num:3or6
	//**************************************

	let now_date = new Date();
	let tmp_date = now_date;
	
	//指定した倍数に応じた時間を引く。UTCにもしておく
	
	let inc = 3;
	
	if (num === 3){
		let inc = 3;
	}else{
		let inc = 4;
	}
	
	tmp_date.setHours( tmp_date.getHours() - inc - 9);
	
	let amari = tmp_date.getHours() % num;
	
	tmp_date.setHours( tmp_date.getHours() - amari);

	let out_yy = tmp_date.getFullYear();
	let out_mo = tmp_date.getMonth() + 1;
	let out_dd = tmp_date.getDate();
	let out_hh = tmp_date.getHours();
	let out_mi = tmp_date.getMinutes();	

	//０埋めをする
	out_mo = ('00' + out_mo).slice(-2);
	out_dd = ('00' + out_dd).slice(-2);
	out_hh = ('00' + out_hh).slice(-2);
	out_mi = ('00' + out_mi).slice(-2);

	let out_time_str = `${out_yy}${out_mo}${out_dd}${out_hh}00`;

	return out_time_str;
}

export const date_cal = (date_str, hour_str) => {
	//**************************************
	// yyyymoddhhmiの形で年月日時を受け取り、
	// 指定した時間を加減して、yyyymoddhhmi
	// の文字列で返す。
	//
	// date_str:yyyymoddhhmiの文字列
	// hour_str:加減する時間
	//**************************************

	let yy = date_str.substr(0,4);
	let mo = date_str.substr(4,2);
	let dd = date_str.substr(6,2);
	let hh = date_str.substr(8,2);
	let mi = date_str.substr(10,2);

	let tmp_str = `${yy}/${mo}/${dd} ${hh}:${mi}:00`;

	let date = new Date(tmp_str);

	date.setHours(date.getHours() + hour_str);

	let out_yy = date.getFullYear();
	let out_mo = date.getMonth() + 1;
	let out_dd = date.getDate();
	let out_hh = date.getHours();
	let out_mi = date.getMinutes();	

	//０埋めをする
	out_mo = ('00' + out_mo).slice(-2);
	out_dd = ('00' + out_dd).slice(-2);
	out_hh = ('00' + out_hh).slice(-2);
	out_mi = ('00' + out_mi).slice(-2);

	let out_time_str = `${out_yy}${out_mo}${out_dd}${out_hh}${out_mi}`;

	return out_time_str;
}