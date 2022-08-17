	$(function() {
		$('.wrapper-slider-right-description').slick({
			infinite: false,
			dots:false,
			slidesToShow: 1,
			centerMode: false, //要素を中央寄せ
			centerPadding:'0', //両サイドの見えている部分のサイズ
			autoplay:false, //自動再生
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '0'
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					centerPadding: '0'
				}
			}
			]
		});
	});
