// ヘッダー スクロール位置によって表示切替
$(window).scroll(function() {

	var scrollValue =  $(window).scrollTop(); // スクロール量

	// 意匠一覧
	var design_list_table_target = $( '#table-design-list' ).offset().top; // 追従させたいテーブルのウインドウ上部からの高さ取得
	var design_list_table_target_Num = Number( design_list_table_target ); // 高さを数字に変換
	// $('#intervalValue').val(scrollValue);

	if(scrollValue < design_list_table_target_Num - 134 ) {　// 数値はヘッダー部の高さ
		var tmp_top = design_list_table_target_Num - scrollValue;
		$("#table-design-list-header").removeClass('active');
	}else if(scrollValue >= design_list_table_target_Num - 134 ){
		$("#table-design-list-header").addClass('active');
	}

});

// 982