/* **************************************
   Simple jQuery Slideshow Script
************************************** */

jQuery.noConflict();  
var $ = jQuery;  

function slideSwitch() {
     var j$active = j$('#slideshow DIV.active');


     if ( j$active.length == 0 ) j$active = j$('#slideshow DIV:last');

    var j$next =  j$active.next().length ? j$active.next()
        : j$('#slideshow DIV:first');

    j$active.addClass('last-active');

    j$next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            j$active.removeClass('active last-active');
        });
        // $(document).ready(function(){
        //             $('#sekaeleSlider').jshowoff({
        //                 links: false,
        //                 controls: false,
        //                 hoverPause: false,
        //                 changeSpeed: 800,
        //                 speed: 7500,
        //                 effect: 'slideLeft'
        //             });
        //         });
}

