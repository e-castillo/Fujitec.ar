// メガドロップダウン実装
$(function() {
var scrollTop;
var serviceMenu = 0;
var commonSearch = 0;

var clickServiceFlg = 0;
var clickSearchFlg = 0;


	// 製品・サービス
	$(".menuitem-service").click(function(event){
		event.stopPropagation();
		if(clickServiceFlg == 0){
			if(clickSearchFlg == 1){
				$("#menu_search").hide();
				$(".icon-search").removeClass("active");
				clickSearchFlg = 0;
			}
			// メガドロップダウン表示
			$(this).addClass("active");
			$("#menu_service").fadeIn("fast");
			clickServiceFlg = 1;
		}else{
			$("#menu_service").fadeOut("fast");
			$(this).removeClass("active");
			clickServiceFlg = 0;
		}
	});

	// サイト内検索
	$(".icon-search").click(function(event){
		event.stopPropagation();
		if(clickSearchFlg == 0){
			if(clickServiceFlg == 1){
				$("#menu_service").hide();
				$(".menuitem-service").removeClass("active");
				clickServiceFlg = 0;
			}
			// メガドロップダウン表示
			$(this).addClass("active");
			$("#menu_search").fadeIn("fast");
			clickSearchFlg = 1;
		}else{
			$("#menu_search").fadeOut("fast");
			$(this).removeClass("active");
			clickSearchFlg = 0;
		}
	});

/*
	// 範囲外クリックで閉じる
	$('#menu_service').skOuterClick(function() {  
		$(this).fadeOut("fast");
		$("#switch_dropdown_01").parent("li").removeClass("open");
		clickServiceFlg = 0;
		clickCompanyFlg = 0;
		clickRecruitFlg = 0;
	});
	// 閉じるボタンで閉じる
	$('#closebutton_01').click(function(event){
		$("#menu_service").fadeOut("fast");
		$("#switch_dropdown_01").parent("li").removeClass("open");
		clickServiceFlg = 0;
		clickCompanyFlg = 0;
		clickRecruitFlg = 0;
	});
*/

	// SPメニュー
	$('.menu-trigger').click(function() {
		var $spMenuSwitch = $(this);
		if ($spMenuSwitch.hasClass('active')) {
			$spMenuSwitch.removeClass('active');
			$('#menunavigation_search_sp').animate({'top':'-500px'},200);
			$('.menu-trigger > #open').css('display','none');
			$('.menu-trigger > #default').css('display','block');
			$('#modalbg').fadeOut('fast');
		}else{
			$spMenuSwitch.addClass('active');
			$('#modalbg').fadeIn('fast');
			$('.menu-trigger > #default').css('display','none');
			$('.menu-trigger > #open').css('display','block');
			$('#menunavigation_search_sp').animate({'top':'45px'},200);
		}
	});
	// 閉じるボタンで閉じる
	$('.bar-spmenuclose').click(function(event){
		$('.menu-trigger').removeClass('active');
		$('#menunavigation_search_sp').animate({'top':'-500px'},200);
		$('.menu-trigger > #open').css('display','none');
		$('.menu-trigger > #default').css('display','block');
		$('#modalbg').fadeOut('fast');
	});


	// SP版リレイティブナビ実装

	$("#switch_sppagenavi").click(function(){
		if ($(this).hasClass("active")) {
			$(this).next(".wrapper-pagenavigation").slideUp("fast");
			$(this).removeClass("active");
		}else{
			$(this).next(".wrapper-pagenavigation").slideDown("fast");
			$(this).addClass("active");
		}
	});

/*
	// アコーディオンコンテンツ実装
	$("#menunavigation_inner > ul > li > dl.list-accordion-spmenu > dt").click(function(){
		if ($(this).hasClass("active")) {
			$(this).next("dd").slideUp("fast");

			$(this).removeClass("active");
		}else{
			$(this).next("dd").slideDown("fast");

			var self = $(this);
			$("#menunavigation_inner > ul > li > dl.list-accordion-spmenu > dt").not(self).next("dd").slideUp("fast");
			$("#menunavigation_inner > ul > li > dl.list-accordion-spmenu > dt").not(self).removeClass("active");
			$(this).addClass("active");
		}
	});
*/


});