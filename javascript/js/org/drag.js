function drag_and_get_position(id, base_id){
	//***********************************
	// 要素をドラッグした時に起点とする
	// 要素からの相対距離を求める。
	//
	// id:ドラッグするid
	// base_id:起点とする要素のid
	//***********************************
        $(function() {
                $(id).draggable({
			helper:'clone',
                	start:function(){
                                $(this).hide();
                	},
                        stop: function(e, ui) {
				$(this).show();
				var top_t = ui.position.top - $(base_id).position().top;
				var top_l = ui.position.left - $(base_id).position().left;
                                alert('top:' + top_t + 'left:' + top_l);
				window.location.href = "https://www.jma.go.jp/jma/index.html";
                        }
                })
        })
}
