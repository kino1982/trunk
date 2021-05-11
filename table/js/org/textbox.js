function write_textbox(id,name_str,value_str){
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	// テキストボックスを作成する関数
	// 
	// jqueryを利用 
	// name_str:nameの値
	// value_str:テキストボックスに
	//           デフォルトで入力
	//           されている値
	// id:タグのid
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

	s = '<input type="text"';
	s = s + ' name="' + name_str + '"';
	s = s + ' value="' + value_str + '">';

	$(id).append(s);

}
