// メガドロップダウン実装
$(function() {

	var clickFlg_01 = 0;
	var clickFlg_02 = 0;
	var clickFlg_03 = 0;
	var clickFlg_04 = 0;
	var clickFlg_05 = 0;
	var clickFlg_06 = 0;
	var clickFlg_07 = 0;

	// 初期状態：オフィスが選択状態
	$(this).addClass("active");
	$("#recommend_table td.type-p").addClass("active");
	$("#recommend_table th.type-p .recommend").addClass("active");
	
	// オフィス P
	$("#switch_xior_01").click(function(){
		$(".switch-recommendtable-xior").removeClass("active");
		$("#recommend_table td").removeClass("active");
		$("#recommend_table th .recommend").removeClass("active");
		if(clickFlg_01 == 0){
			// ラベルactive状態
			$(this).addClass("active");
			$("#recommend_table td.type-p").addClass("active");
			$("#recommend_table th.type-p .recommend").addClass("active");
			//clickFlg_01 = 1;
		}
	});
	// テナントビル P
	$("#switch_xior_02").click(function(){
		$(".switch-recommendtable-xior").removeClass("active");
		$("#recommend_table td").removeClass("active");
		$("#recommend_table th .recommend").removeClass("active");
		if(clickFlg_02 == 0){
			// ラベルactive状態
			$(this).addClass("active");
			$("#recommend_table td.type-p").addClass("active");
			$("#recommend_table th.type-p .recommend").addClass("active");
			//clickFlg_02 = 1;
		}
	});
	// マンション　R S
	$("#switch_xior_03").click(function(){
		$(".switch-recommendtable-xior").removeClass("active");
		$("#recommend_table td").removeClass("active");
		$("#recommend_table th .recommend").removeClass("active");
		if(clickFlg_03 == 0){
			// ラベルactive状態
			$(this).addClass("active");
			$("#recommend_table td.type-r").addClass("active");
			$("#recommend_table td.type-s").addClass("active");
			$("#recommend_table th.type-r .recommend").addClass("active");
			$("#recommend_table th.type-s .recommend-type2").addClass("active");
			//clickFlg_03 = 1;
		}
	});
	// 医療・福祉施設　S B
	$("#switch_xior_04").click(function(){
		$(".switch-recommendtable-xior").removeClass("active");
		$("#recommend_table td").removeClass("active");
		$("#recommend_table th .recommend").removeClass("active");
		if(clickFlg_04 == 0){
			// ラベルactive状態
			$(this).addClass("active");
			$("#recommend_table td.type-b").addClass("active");
			$("#recommend_table td.type-s").addClass("active");
			$("#recommend_table th.type-b .recommend").addClass("active");
			$("#recommend_table th.type-s .recommend").addClass("active");
			$("#recommend_table th.type-s .recommend-type2").removeClass("active");
			//clickFlg_04 = 1;
		}
	});
	// ホテル　P
	$("#switch_xior_05").click(function(){
		$(".switch-recommendtable-xior").removeClass("active");
		$("#recommend_table td").removeClass("active");
		$("#recommend_table th .recommend").removeClass("active");
		if(clickFlg_05 == 0){
			// ラベルactive状態
			$(this).addClass("active");
			$("#recommend_table td.type-p").addClass("active");
			$("#recommend_table th.type-p .recommend").addClass("active");
			$("#recommend_table th.type-s .recommend-type2").removeClass("active");
			//clickFlg_05 = 1;
		}
	});
	// 商業　P S
	$("#switch_xior_06").click(function(){
		$(".switch-recommendtable-xior").removeClass("active");
		$("#recommend_table td").removeClass("active");
		$("#recommend_table th .recommend").removeClass("active");
		if(clickFlg_06 == 0){
			// ラベルactive状態
			$(this).addClass("active");
			$("#recommend_table td.type-p").addClass("active");
			$("#recommend_table td.type-s").addClass("active");
			$("#recommend_table th.type-p .recommend").addClass("active");
			$("#recommend_table th.type-s .recommend").addClass("active");
			$("#recommend_table th.type-s .recommend-type2").removeClass("active");
			//clickFlg_06 = 1;
		}
	});
	// 各種施設 P S
	$("#switch_xior_07").click(function(){
		$(".switch-recommendtable-xior").removeClass("active");
		$("#recommend_table td").removeClass("active");
		$("#recommend_table th .recommend").removeClass("active");
		if(clickFlg_07 == 0){
			// ラベルactive状態
			$(this).addClass("active");
			$("#recommend_table td.type-p").addClass("active");
			$("#recommend_table td.type-s").addClass("active");
			$("#recommend_table th.type-p .recommend").addClass("active");
			$("#recommend_table th.type-s .recommend").addClass("active");
			$("#recommend_table th.type-s .recommend-type2").removeClass("active");
			//clickFlg_07 = 1;
		}
	});
/*

		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("#recommend_table td").removeClass("active");
		}else{
			// ラベルactive状態
			$(this).addClass("active");

			// 紐付くtdにaddclass
			// オフィス P
			if ($(this).attr("id") == "switch_xior_01") {
				$("#recommend_table td").removeClass("active");
				$("#recommend_table td.type-p").addClass("active");
				$("#recommend_table td.type-p").addClass("active");
				clickFlg = 1;
			}
			// テナントビル P
			if ($(this).attr("id") == "switch_xior_02") {
				
				$("#recommend_table td").removeClass("active");
				$("#recommend_table td.type-p").addClass("active");
			}
			// マンション　R S
			if ($(this).attr("id") == "switch_xior_03") {
				$("#recommend_table td").removeClass("active");
				$("#recommend_table td.type-r").addClass("active");
				$("#recommend_table td.type-s").addClass("active");
			}
			// 医療・福祉施設　S B
			if ($(this).attr("id") == "switch_xior_04") {
				$("#recommend_table td").removeClass("active");
				$("#recommend_table td.type-s").addClass("active");
				$("#recommend_table td.type-b").addClass("active");
			}
			// ホテル　P 
			if ($(this).attr("id") == "switch_xior_05") {
				$("#recommend_table td").removeClass("active");
				$("#recommend_table td.type-p").addClass("active");
			}
			// 商業　P S
			if ($(this).attr("id") == "switch_xior_06") {
				$("#recommend_table td").removeClass("active");
				$("#recommend_table td.type-p").addClass("active");
				$("#recommend_table td.type-s").addClass("active");
			}
			// 各種施設 P S
			if ($(this).attr("id") == "switch_xior_07") {
				$("#recommend_table td").removeClass("active");
				$("#recommend_table td.type-p").addClass("active");
				$("#recommend_table td.type-s").addClass("active");
			}
		}
*/
	
});