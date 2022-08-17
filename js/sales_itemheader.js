$(window).load(function(){

});

// ヘッダー スクロール位置によって表示切替
$(window).scroll(function() {

	var scrollValue =  $(window).scrollTop();

	// XIOR TOP　
	var recommend_table_target = $( '#recommend_table' ).offset().top;　// 追従させたいテーブルのウインドウ上部からの高さ取得
	var recommend_table_target_Num = Number( recommend_table_target ); // 高さを数字に変換
	// $('#intervalValue').val(scrollValue);

	if ( $("#tabcontents_02").css("display") == "block" ) {
		if( scrollValue < recommend_table_target_Num - 70 ) { // 数値はヘッダー部の高さ
			var tmp_top = recommend_table_target_Num - scrollValue;
			$("#fixheader_evtable").removeClass('active');
		}else if(scrollValue >= recommend_table_target_Num - 70 ){
			$("#fixheader_evtable").addClass('active');
		}
	}
});