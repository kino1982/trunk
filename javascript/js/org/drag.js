$(function() {
        // #div1をdrag可能に
	$("#div1").draggable({
		helper:'clone',
		start:function(){
				$(this).hide();
		},
		stop: function(e, ui) {
			$(this).show()
			$("#test99").append("<p>テストだよ</p>");
		}
	});
});

$(function() {
	$('#test').draggable({
		stop: function(e, ui) {
			alert('top:' + ui.position.top + 'left:' + ui.position.left);
			
		}
	})
})
