function write_table(table_ary){
	//*************************
	// table部分を記述する関数
	//*************************

	var tr_s = "";

	// table内のtrを記述する
	// table_aryは２次元配列

	for (var ii=0;ii<table_ary.length;ii++){
		tr_s = tr_s + write_tr(table_ary[ii]);
	}

	//tableを記述	
	var table_s = "<table border='1'>" + tr_s + "</table>"; 
	$("#kino").append(table_s);

	console.log("testだよ");
}

function write_tr(td_ary){
	//*************************
	// tableのtrを記述する関数
	//*************************
	
	var s = "";

	for (var ii=0;ii<td_ary.length;ii++){
		s = s + "<td>" + td_ary[ii] + "</td>";
	}

	s = "<tr>" + s + "</tr>";

	return s;
}
