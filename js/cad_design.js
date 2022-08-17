$(function() {

	data = {
		d_open:{ 1:"0", 2:"1", 3:"1", 4:"0",default:"2"},
		speed:{1:"1",2:"1",3:"1",4:"1",default:"1"},
		d_width:{1:"1",2:"1",3:"0",4:"0",5:"0",6:"0",7:"0",8:"0",9:"0",default:"1"},
		d_type:{1:"1",2:"1",3:"1",default:"1"},
		weight:{1:"0",2:"0",3:"1",4:"1",5:"0",default:"3"},
		frame:{1:"1",2:"1",3:"1",4:"1",default:"2"}
		};
		console.log(data);

	// ラジオボタンを押したとき
	$('input[type=radio]').change (function() {
		// value値取得
		$('input[type="radio"]').each(function(){
			var selectable = $(this).val();
			var num_selectable = Number(selectable);
			
			// value値が0のときclass追加
			if ( num_selectable == 0 ) {
				$(this).parents('li').addClass('input-disabled');
				$(this).prop("disabled", true);
			}
			else{
				$(this).parents('li').addClass('input-abled');
			}
		});
	});

	// 既にタイプが選ばれてるとき
	if ($('input[name=type]').prop('checked')) {
		$('input[name=type]').parents('dl').next('dl').addClass('type-select');
		// 用途かごタイプ表示
		if ($('input#type01').prop('checked')){
				$('.type-p').show();
				$('.type-r').hide();
				$('.type-b').hide();
				$('.type-s').hide();
				$('.type-f').hide();
				$('.type-e1').hide();
				$('.type-e0').hide();
		}
		else if ($('input#type02').prop('checked')){
				$('.type-p').hide();
				$('.type-r').show();
				$('.type-b').hide();
				$('.type-s').hide();
				$('.type-f').hide();
				$('.type-e1').hide();
				$('.type-e0').hide();
		}
		else if ($('input#type03').prop('checked')){
				$('.type-p').hide();
				$('.type-r').hide();
				$('.type-b').show();
				$('.type-s').hide();
				$('.type-f').hide();
				$('.type-e1').hide();
				$('.type-e0').hide();
		}
		else if ($('input#type04').prop('checked')){
				$('.type-p').hide();
				$('.type-r').hide();
				$('.type-b').hide();
				$('.type-s').show();
				$('.type-f').hide();
				$('.type-e1').hide();
				$('.type-e0').hide();
		}
		else if ($('input#type05').prop('checked')){
				$('.type-p').hide();
				$('.type-r').hide();
				$('.type-b').hide();
				$('.type-s').hide();
				$('.type-f').show();
				$('.type-e1').hide();
				$('.type-e0').hide();
		}
		else if ($('input#type06').prop('checked')){
				$('.type-p').hide();
				$('.type-r').hide();
				$('.type-b').hide();
				$('.type-s').hide();
				$('.type-f').hide();
				$('.type-e1').show();
				$('.type-e0').hide();
		}
		else if ($('input#type07').prop('checked')){
				$('.type-p').hide();
				$('.type-r').hide();
				$('.type-b').hide();
				$('.type-s').hide();
				$('.type-f').hide();
				$('.type-e1').hide();
				$('.type-e0').show();
		}
		
		if ($('input[name=teiin]').prop('checked')) {
				$('input[name=teiin]').parents('dl').removeClass('type-select');
				$('input[name=teiin]').parents('dl').nextAll('dl').addClass('type-select');
		}
	}
	// タイプが選ばれてないとき
	else {
		$('.table-caddl > dl:first').addClass('type-select');
			$('.table-caddl > dl:first input[type=radio]').change (function() {
				$(this).parents('dl').next('dl').addClass('type-select');
				$(this).parents('dl').removeClass('type-select');
			});
	}

	// 常にタイプ別変わったときに選択肢変える
	$('.table-caddl > dl:first input[type=radio]').change (function() {
		$(this).parents('dl').next('dl').addClass('type-select');
		$(this).parents('dl').removeClass('type-select');
	});


	 //二段目以降のラジオボタンを押したとき
	$('.table-caddl > dl:not(:first) input[type=radio]').change (function() {
		// チェックされてる列はクラスを消す
		$(this).parents('dl').nextAll('dl').addClass('type-select');
		$('input[type=radio]:checked').parents('dl').removeClass('type-select');
	});
	

	$('#type01').click(function (){
			$('.type-p').show();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').hide();
	});
		
	$('#type02').click(function (){
			$('.type-p').hide();
			$('.type-r').show();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').hide();
		});
	$('#type03').click(function (){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').show();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').hide();
		});
	$('#type04').click(function (){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').show();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').hide();
		});
	$('#type05').click(function (){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').show();
			$('.type-e1').hide();
			$('.type-e0').hide();
		});
	$('#type06').click(function (){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').show();
			$('.type-e0').hide();
		});
	$('#type07').click(function (){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').show();
		});



//		$.ajax(
//		{
//			type: 'POST',
//			url: '/sales/ajaxcad/display',
//			data: {
//				model:$('[name="model"]:checked').val(),
//				basket:$('[name="basket"]:checked').val()
//			},
//			success: function(data) {
//				console.log(data);
//			},
//			error: function(data) {
//				console.log('error');
//			}
//		});
//	});
//
//
//	$( 'input[name="model"]:radio' ).change( function() {
//		$.ajax(
//		{
//			type: 'POST',
//			url: '/sales/ajaxcad/basket',
//			data: {
//				model:$('[name="model"]:checked').val()
//			},
//			success: function(data) {
//				console.log(data);
//			},
//			error: function(data) {
//				console.log('error');
//			}
//		});
//	});


	// 用途かごタイプ選択したとき
	if ($('input#type01').prop('checked')){
			$('.type-p').show();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').hide();
	}
	else if ($('input#type02').prop('checked')){
			$('.type-p').hide();
			$('.type-r').show();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').hide();
	}
	else if ($('input#type03').prop('checked')){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').show();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').hide();
	}
	else if ($('input#type04').prop('checked')){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').show();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').hide();
	}
	else if ($('input#type05').prop('checked')){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').show();
			$('.type-e1').hide();
			$('.type-e0').hide();
	}
	else if ($('input#type06').prop('checked')){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').show();
			$('.type-e0').hide();
	}
		
	else if ($('input#type07').prop('checked')){
			$('.type-p').hide();
			$('.type-r').hide();
			$('.type-b').hide();
			$('.type-s').hide();
			$('.type-f').hide();
			$('.type-e1').hide();
			$('.type-e0').show();
	}
		

	});


