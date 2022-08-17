$(function() {

	// 最初の人数をdisable
	$('.table-floor tr:nth-child(2) td:nth-child(4) input').prop("disabled", true);
		
	$("select").change(function () {
	
		var val = $("select").val();
		var val_num = Number(val);
		var i = 0 ;
		
		// 一旦リセット
		$.when(
			$('.tr-floor2').remove()
		).done(function() {
			// value値の回だけ追加
			for (var ia = 0; ia < val_num - 1 ; ia++) {
					$('<tr class=\"tr-floor tr-floor2\"><td><input type=\"checkbox\" id=\"teishi\" name=\"\" checked=\"checked\"></td><td><input type=\"text\" name=\"pass2\" class=\"input-parts-3\"></td><td><input type=\"text\" name=\"pass2\" class=\"input-parts-3\"></td><td><input type=\"text\" name=\"pass2\" class=\"input-parts-3\"></td></tr>').appendTo('.table-floor');
				    //$('.tr-floor2').clone(true).appendTo('.table-floor');
				    
				    $('.tr-floor').each(function(i){
				    	$(this).attr('id','floor' + (i+1));
				    	$(this).children('td:nth-child(3)').children('input').attr('tabindex', (i+1));
				    	$(this).children('td:nth-child(4)').children('input').attr('tabindex', (i+31));
					});
				
			    	//$.when (
			    		$('.tr-floor > td:nth-child(2) input').each(function(i){
			    		$(this).attr('value', (i+1));
					});
					//).done(function() {
					//	$('.tr-floor:last-child input').attr( 'value', '' );
					//});
				}
				$('.table-floor tr:last-child td:nth-child(3) input').prop("disabled", true);
			});	
		});

		$(".table-floor").on( "keydown", "td:nth-child(3) input", function(e){
			if(e.keyCode == 9){
				
				// 全体の行数
				var tablelength = $('.table-floor tr').length;
				var talbelength_num = Number(tablelength) ;
				console.log(talbelength_num);
				
				//アクティブの行目
				var activelength = $('.table-floor tr').index($(this).parents('tr'));
				var activelength_num = Number(activelength) +1 ;
				console.log(activelength_num);
				
				// 全体数より-1だったときはfalse
				if ( talbelength_num -1 == activelength_num ) {
				} else {
					var inputsize = $(this).val();
					$(this).parents('tr').next('tr').children('td:nth-child(3)').children('input').val(inputsize);
				}
			}
		});
		
		$(".table-floor").on( "keydown", "td:nth-child(4) input", function(e){
			if(e.keyCode == 9){
				var inputsize = $(this).val();
				$(this).parents('tr').next('tr').children('td:nth-child(4)').children('input').val(inputsize);	
			}
		});



	});	
