$(function() {
	$(".button-safety-detail").click(function(event){
		event.stopPropagation();
		var idname = $(this).attr("id");
		if(idname == "switch_safetymodal_01") {
			$('#safetymodal_01').css('display','block');
			$('#safetymodal_02').css('display','none');
			$('#safetymodal_03').css('display','none');
			$('#safetymodal_04').css('display','none');
		}else if(idname == "switch_safetymodal_02") {
			$('#safetymodal_01').css('display','none');
			$('#safetymodal_02').css('display','block');
			$('#safetymodal_03').css('display','none');
			$('#safetymodal_04').css('display','none');
		}else if(idname == "switch_safetymodal_03") {
			$('#safetymodal_01').css('display','none');
			$('#safetymodal_02').css('display','none');
			$('#safetymodal_03').css('display','block');
			$('#safetymodal_04').css('display','none');
		}else if(idname == "switch_safetymodal_04") {
			$('#safetymodal_01').css('display','none');
			$('#safetymodal_02').css('display','none');
			$('#safetymodal_03').css('display','none');
			$('#safetymodal_04').css('display','block');
		}
		$("#modal_common").fadeIn("fast");
	});






	// ¹ ‡ìÍâ¥¯¥ê¥Ã¥¯¤Çé]¤¸¤ë
	$('#modal_contents').skOuterClick(function() {
		$("#modal_common").fadeOut("fast");
	});
	// é]¤¸¤ë¥Ü¥¿¥ó¤Çé]¤¸¤ë
	$(".switch-modalclose").click(function(){
		$("#modal_common").fadeOut("fast");
	});
});