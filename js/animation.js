$(function(){
    if (window.matchMedia( '(min-width: 641px)' ).matches) {

        var setElm = $('.scrEvent');
        var setElm2 = $('.scrEvent2');
        var setElm3 = $('.scrEvent3');
        var setElm4 = $('.scrEvent4');
        var setElm5 = $('.scrEvent5');
        var setElm6 = $('.scrEvent6');
        delayHeight = 150;
        delayHeight2 = 100;
        delayHeight3 = 40;
        setElm.css({display:'block',opacity:'0'});
        setElm2.css({display:'block',opacity:'0'});
        setElm3.css({display:'block',opacity:'0'});
        setElm4.css({display:'block',opacity:'0'});
        setElm5.css({display:'block',opacity:'0'});
        setElm6.css({display:'block',opacity:'0'});
        $('html,body').animate({scrollTop:0},1);
     }
    $(window).on('load scroll resize',function(){
    if (window.matchMedia( '(max-width: 640px)' ).matches) {
      return;
    }

        setElm.each(function(){
            var setThis = $(this),
            elmTop = setThis.offset().top,
            elmHeight = setThis.height(),
            scrTop = $(window).scrollTop(),
            winHeight = $(window).height();
            if (scrTop > elmTop - winHeight + delayHeight2 && scrTop < elmTop + elmHeight){
                setThis.stop().animate({right:'0',opacity:'1'},200);
            } else if (scrTop < elmTop - winHeight + delayHeight2 && scrTop < elmTop + delayHeight2){
                setThis.stop().animate({right:'-100px',opacity:'0'},200);
            }
        });
        
        setElm2.each(function(){
            var setThis = $(this),
            elmTop = setThis.offset().top,
            elmHeight = setThis.height(),
            scrTop = $(window).scrollTop(),
            winHeight = $(window).height();
            if (scrTop > elmTop - winHeight + delayHeight && scrTop < elmTop + elmHeight){
                setThis.stop().animate({left:'0',opacity:'1'},200);
            } else if (scrTop < elmTop - winHeight + delayHeight && scrTop < elmTop + delayHeight){
                setThis.stop().animate({left:'-100px',opacity:'0'},200);
            }
        });

         setElm3.each(function(){
            var setThis = $(this),
            elmTop = setThis.offset().top,
            elmHeight = setThis.height(),
            scrTop = $(window).scrollTop(),
            winHeight = $(window).height();
            if (scrTop > elmTop - winHeight + delayHeight && scrTop < elmTop + elmHeight){
                setThis.stop().animate({top:'20%',opacity:'1'},300);
            } else if (scrTop < elmTop - winHeight + delayHeight && scrTop < elmTop + delayHeight){
                setThis.stop().animate({opacity:'0'},300);
            }
        });
        
        setElm4.each(function(){
            var setThis = $(this),
            elmTop = setThis.offset().top,
            elmHeight = setThis.height(),
            scrTop = $(window).scrollTop(),
            winHeight = $(window).height();
            if (scrTop > elmTop - winHeight + delayHeight3 && scrTop < elmTop + elmHeight){
                setThis.stop().animate({bottom:'0',opacity:'1'},200);
            } else if (scrTop < elmTop - winHeight + delayHeight3 && scrTop < elmTop + delayHeight3){
                setThis.stop().animate({bottom:'-30px',opacity:'0'},200);
            }
        });
    // スクロール量取得
        setElm5.each(function(){
                var setThis = $(this),
                elmTop = setThis.offset().top,
                elmHeight = setThis.height(),
                scrTop = $(window).scrollTop(),
                winHeight = $(window).height();
                // グラフ呼び出し
        });
        setElm6.each(function(){
            var setThis = $(this),
            elmTop = setThis.offset().top,
            elmHeight = setThis.height(),
            scrTop = $(window).scrollTop(),
            winHeight = $(window).height();
            if (scrTop > elmTop - winHeight + delayHeight2 && scrTop < elmTop + elmHeight){
                setThis.stop().animate({opacity:'1'},1000);
            } else if (scrTop < elmTop - winHeight + delayHeight2 && scrTop < elmTop + delayHeight2){
                setThis.stop().animate({opacity:'0'},1000);
            }
        });
    });

    $('#mapArea').on('inview', function(event, isInView) {
        if (isInView) {
            setTimeout(function(){
                $('#circle_en_01').animate({opacity:1},500);
            }, 1000);
            setTimeout(function(){
                $('#circle_en_02').animate({opacity:1},500);
            }, 1300);
            setTimeout(function(){
                $('#circle_en_03').animate({opacity:1},500);
            }, 1600);
            setTimeout(function(){
                $('#circle_en_04').animate({opacity:1},500);
            }, 1900);
            setTimeout(function(){
                $('#circle_en_05').animate({opacity:1},500);
            }, 2100);
            setTimeout(function(){
                $('#circle_en_06').animate({opacity:1},500);
            }, 2400);
            setTimeout(function(){
                $('#circle_en_07').animate({opacity:1},500);
            }, 2700);
        }else{
            $('#circle01').css('opacity','0');
            $('#circle02').css('opacity','0');
            $('#circle03').css('opacity','0');
            $('#circle04').css('opacity','0');
            $('#circle05').css('opacity','0');
            $('#circle06').css('opacity','0');
            $('#circle07').css('opacity','0');
        }
    });

    $('#switch_maparea').on('inview', function(event, isInView) {
        if (isInView) {
            var options = {
                useEasing : true, 
                useGrouping : true,
                eparator : ',', 
                decimal : '.', 
                prefix : '', 
                suffix : '' 
            };
            setTimeout(function(){
                $('#circle_en_01').animate({opacity:1},500);
            }, 1000);
            setTimeout(function(){
                $('#circle_en_02').animate({opacity:1},500);
            }, 1300);
            setTimeout(function(){
                $('#circle_en_03').animate({opacity:1},500);
            }, 1600);
            setTimeout(function(){
                $('#circle_en_04').animate({opacity:1},500);
            }, 1900);
            setTimeout(function(){
                $('#circle_en_05').animate({opacity:1},500);
            }, 2100);
            setTimeout(function(){
                $('#circle_en_06').animate({opacity:1},500);
            }, 2400);
            setTimeout(function(){
                $('#circle_en_07').animate({opacity:1},500);
            }, 2700);
            setTimeout(function(){
            var demo = new CountUp("counter25", 0, 25, 0, 5, options);
            // console.log("start");
            // console.log("start");
            demo.start();
        },250);
        }else{
            $('#circle01').css('opacity','0');
            $('#circle02').css('opacity','0');
            $('#circle03').css('opacity','0');
            $('#circle04').css('opacity','0');
            $('#circle05').css('opacity','0');
            $('#circle06').css('opacity','0');
            $('#circle07').css('opacity','0');
        }
    });
    $('#switch_graph').on('inview', function(event, isInView) {
        if (isInView) {
            $('.wrapper-graph').css('opacity','0');
            $('.wrapper-count').css('opacity','0');
            var doughnutData = [
                {
                    value: 70,
                    color:"#61add3"
                },
                {
                    value: 30,
                    color: "#ffffff"
                }
            ];
            var options = {
                animation : true,
                animationSteps: 60,
                animationEasing: "easeInOutCubic",
                responsive:true,
                useEasing : true,
                useGrouping : true,
                separator : ',',
                decimal : '.',
                prefix : '',
                suffix : ''
            };
            var demo = new CountUp("myTargetElement", 0, 60, 0, 1.7, options);
            setTimeout(function(){
                var myDoughnut = document.getElementById("graph").getContext("2d");
                var myDoughnut = new Chart(document.getElementById("graph").getContext("2d")).Doughnut(doughnutData);
                demo.start();
                $('.wrapper-graph').stop().animate({opacity:1});
                $('.wrapper-count').stop().animate({opacity:1});
            },1500);
        } else {
            $('.wrapper-graph').stop().animate({opacity:0});
            $('.wrapper-count').stop().animate({opacity:0});
        }
    });
});
