// メガドロップダウン実装
$(function() {
var scrollTop;

var clickSitemapServiceFlg = 0;
var clickSitemapCompanyFlg = 0;
var clickSitemapIrFlg = 0;
var clickSitemapRecruitFlg = 0;

	// 製品・サービス
	$("#sitemap_service").click(function(event){
		event.stopPropagation();
		if(clickSitemapServiceFlg == 0){

			if(clickSitemapIrFlg == 1){
				$("#common_sitemap_ir").css("display","none");
				$("#sitemap_ir").removeClass("active");
				clickSitemapIrFlg = 0;
			}

			if(clickSitemapCompanyFlg == 1){
				$("#common_sitemap_company").css("display","none");
				$("#sitemap_company").removeClass("active");
				clickSitemapCompanyFlg = 0;
			}

			if(clickSitemapRecruitFlg == 1){
				$("#common_sitemap_recruit").css("display","none");
				$("#sitemap_recruit").removeClass("active");
				clickSitemapRecruitFlg = 0;
			}

			// メガドロップダウン表示
			$(this).addClass("active");
			// 他メニュー非表示
			$("#common_sitemap_ir").css("display","none");
			$("#common_sitemap_company").css("display","none");
			$("#common_sitemap_recruit").css("display","none");
			$("#common_sitemap_service").css("display","block");

			// 該当メニュー表示
			$("#common_sitemap_inner").slideDown("fast");
			$("html,body").animate({ scrollTop: 100000 }, 500);
			
			clickSitemapServiceFlg = 1;
		}else{
			$("#common_sitemap_inner").slideUp("fast");
			$(this).removeClass("active");
			clickSitemapServiceFlg = 0;
		}
	});

	// 企業情報
	$("#sitemap_company").click(function(event){
		event.stopPropagation();
		if(clickSitemapCompanyFlg == 0){

			if(clickSitemapServiceFlg == 1){
				$("#common_sitemap_service").css("display","none");
				$("#sitemap_service").removeClass("active");
				clickSitemapServiceFlg = 0;
			}

			if(clickSitemapIrFlg == 1){
				$("#common_sitemap_ir").css("display","none");
				$("#sitemap_ir").removeClass("active");
				clickSitemapIrFlg = 0;
			}

			if(clickSitemapRecruitFlg == 1){
				$("#common_sitemap_recruit").css("display","none");
				$("#sitemap_recruit").removeClass("active");
				clickSitemapRecruitFlg = 0;
			}

			// メガドロップダウン表示
			$(this).addClass("active");
			// 他メニュー非表示
			$("#common_sitemap_service").css("display","none");
			$("#common_sitemap_ir").css("display","none");
			$("#common_sitemap_recruit").css("display","none");
			$("#common_sitemap_company").css("display","block");

			// 該当メニュー表示
			$("#common_sitemap_inner").slideDown("fast");
			$("html,body").animate({ scrollTop: 100000 }, 500);
			
			clickSitemapCompanyFlg = 1;
		}else{
			$("#common_sitemap_inner").slideUp("fast");
			$(this).removeClass("active");
			clickSitemapCompanyFlg = 0;
		}
	});

	// IR情報
	$("#sitemap_ir").click(function(event){
		event.stopPropagation();
		if(clickSitemapIrFlg == 0){

			if(clickSitemapServiceFlg == 1){
				$("#common_sitemap_service").css("display","none");
				$("#sitemap_service").removeClass("active");
				clickSitemapServiceFlg = 0;
			}

			if(clickSitemapCompanyFlg == 1){
				$("#common_sitemap_company").css("display","none");
				$("#sitemap_company").removeClass("active");
				clickSitemapCompanyFlg = 0;
			}

			if(clickSitemapRecruitFlg == 1){
				$("#common_sitemap_recruit").css("display","none");
				$("#sitemap_recruit").removeClass("active");
				clickSitemapRecruitFlg = 0;
			}

			// メガドロップダウン表示
			$(this).addClass("active");
			// 他メニュー非表示
			$("#common_sitemap_service").css("display","none");
			$("#common_sitemap_company").css("display","none");
			$("#common_sitemap_recruit").css("display","none");
			$("#common_sitemap_ir").css("display","block");

			// 該当メニュー表示
			$("#common_sitemap_inner").slideDown("fast");
			$("html,body").animate({ scrollTop: 100000 }, 500);
			
			clickSitemapIrFlg = 1;
		}else{
			$("#common_sitemap_inner").slideUp("fast");
			$(this).removeClass("active");
			clickSitemapIrFlg = 0;
		}
	});

	// 採用情報
	$("#sitemap_recruit").click(function(event){
		event.stopPropagation();
		if(clickSitemapRecruitFlg == 0){

			if(clickSitemapServiceFlg == 1){
				$("#common_sitemap_service").css("display","none");
				$("#sitemap_service").removeClass("active");
				clickSitemapServiceFlg = 0;
			}

			if(clickSitemapCompanyFlg == 1){
				$("#common_sitemap_company").css("display","none");
				$("#sitemap_company").removeClass("active");
				clickSitemapCompanyFlg = 0;
			}

			if(clickSitemapIrFlg == 1){
				$("#common_sitemap_ir").css("display","none");
				$("#sitemap_ir").removeClass("active");
				clickSitemapIrFlg = 0;
			}

			// メガドロップダウン表示
			$(this).addClass("active");
			// 他メニュー非表示
			$("#common_sitemap_service").css("display","none");
			$("#common_sitemap_company").css("display","none");
			$("#common_sitemap_ir").css("display","none");
			$("#common_sitemap_recruit").css("display","block");

			// 該当メニュー表示
			$("#common_sitemap_inner").slideDown("fast");
			$("html,body").animate({ scrollTop: 100000 }, 500);
			
			clickSitemapRecruitFlg = 1;
		}else{
			$("#common_sitemap_inner").slideUp("fast");
			$(this).removeClass("active");
			clickSitemapRecruitFlg = 0;
		}
	});


});