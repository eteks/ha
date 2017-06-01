function position_popup () {
    // var pop_pos = $(window).scrollTop() + 100;
    // $('.popup_pos').css('top', pop_pos);
    var height=$('.popup_pos').height();
    var width=$('.popup_pos').width();
    $('.popup_pos').css({'margin-top': -height / 2 + "px", 'margin-left': -width / 2 + "px"});
}
$(document).ready(function(){
    $('.popup_close').click(function() {
        $(this).parent().fadeOut();
        $('#backgroundPopup').hide();
    });

    // black screen dynamic height on window resize
    $(window).resize(function(){
       //positioning background
       var body_win_height = $(document).height();
       var win_height = $(window).height();

       if( body_win_height > win_height) {
            $('#backgroundPopup').height(body_win_height);
       } else {
            $('#backgroundPopup').height(win_height);
       }
       var floor_height = $('.floor_plan').height();
       var floor_width = $('.floor_plan').width();
       $('.main_wrapper').css({'height':$(window).height()});
       $('.main_wrapper .floor_plan').css({'margin-top':-floor_height/2,'margin-left':-floor_width/2});
    });

    //positioning background
    var body_win_height = $(document).height();
    var win_height = $(window).height();

    if( body_win_height > win_height) {
        $('#backgroundPopup').height(body_win_height);
    } else {
        $('#backgroundPopup').height(win_height);
    }


    var floor_height = $('.floor_plan').height();
    var floor_width = $('.floor_plan').width();
    $('.main_wrapper').css({'height':$(window).height()});
    $('.main_wrapper .floor_plan').css({'margin-top':-floor_height/2,'margin-left':-floor_width/2});
});
