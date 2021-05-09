function write_listbox(text_ary, value_ary, id){
	//*************************
	// リストボックスを作る関数
	// 
	//*************************

	s = '<select>';

	for (var ii=0;ii<text_ary.length;ii++){
		value_str = value_ary[text_ary[ii]]
		s = s + '<option value="' + value_str + '">' + text_ary[ii] + '</option>';
	}

	s = s + '</select>'

	$(id).append(s);
} 
