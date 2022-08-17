$(function() {

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
	}
	// タイプが選ばれてないとき
	else {
		$('.table-caddl > dl').addClass('type-select');
			$('.table-caddl > dl input[type=radio]').change (function() {
				$(this).parents('dl').removeClass('type-select');
			});
	}

	
		

	});


