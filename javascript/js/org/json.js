function read_json(url){
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	// jsonファイルを読み込み、
	// consoleに出力
	//
	// jqeryを使用
	// url:jsonファイルのurl
	// 
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

	$.getJSON(url, 
		function(data){
			var s1 = 'id=' + data.id;
			var s2 = 'name=' + data.name;
			var s3 = 'animal=' + data.animal;
			console.log(s1);
			console.log(s2);
			console.log(s3);
		}
		
	)
}
