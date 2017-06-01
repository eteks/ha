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

    // board room lighting controll
    var light_status = $('.board_roome_all_lights').attr('light-status');
    if(light_status == 'off'){
        $('.board_room_light').css('background', 'url("../images/new_light_off.png") no-repeat');
        $('.dimmer_wrapper').hide();
        $('.dimmer_off_button_wrapper').show();
    }
    else{
        $('.board_room_light').css('background', 'url("../images/new_light_on.png") no-repeat');
        $('.dimmer_off_button_wrapper').hide();
        $('.dimmer_wrapper').show();
    }
    $('.dimmer_off_button').on('click',function(){
        $('.board_room_light').css('background', 'url("../images/new_light_on.png") no-repeat');
        $('.board_roome_all_lights').attr('light-status','on');
        $('.dimmer_off_button_wrapper').hide();
        $('.dimmer_wrapper').show();
    });
    $('.dimmer_onoff_button').on('click',function(){
        $('.board_room_light').css('background', 'url("../images/new_light_off.png") no-repeat');
        $('.board_roome_all_lights').attr('light-status','off');
        $('.dimmer_off_button_wrapper').show();
        $('.dimmer_wrapper').hide();
    });
    $('.dimmer_range').val('0');
    $('.dimmer_range').on('change',function(){
    	var range_val = $(this).val();
    	var max_range = $(this).attr('max');
    	// alert(range_val);
    	for(var r=1;r<=range_val;r++){
    		$(this).parents('.dimmer_wrapper').find('.sub_range_wrapper').find('.range'+r).addClass('range_active');
    	}
    	for(var rr=parseInt(range_val)+1;rr<=max_range;rr++){
    		$(this).parents('.dimmer_wrapper').find('.sub_range_wrapper').find('.range'+rr).removeClass('range_active');
    	}
    });

    // board room tv controll
    var tv_status = $('.board_room_tv').attr('tv-status');

	if(tv_status == 'off'){
        $('.tv_wrapper').hide();
    	$('.board_room_tv').css('background', 'url(../images/new_tv_off.png) no-repeat');
    }
    else{
        $('.tv_wrapper').show();
        $('.board_room_tv').css('background', 'url(../images/new_tv_off.png) no-repeat');
    }
    $('.tv_off_button').on('click',function(){
    	$('.board_room_tv').css('background', 'url(../images/new_tv_on.png) no-repeat');
        $('.tv_wrapper').show();
        $('.tv_off_button_wrapper').hide();
    });
    $('.tv_onoff_button').on('click',function(){
    	$('.board_room_tv').css('background', 'url(../images/new_tv_off.png) no-repeat');
        $('.tv_wrapper').hide();
        $('.tv_off_button_wrapper').show();
    });
    $('.tv_vol_val').text($('.tv_vol_val').attr('current-vol'));
    $('.tv_vol_plus').on('click',function(){
    	var current_vol = parseInt($('.tv_vol_val').attr('current-vol'))+1;
    	var maximum_vol = parseInt($('.tv_vol_val').attr('tv-vol-max'));
    	var minimum_vol = parseInt($('.tv_vol_val').attr('tv-vol-min'));
    	if(current_vol >= minimum_vol && current_vol <= maximum_vol){
    		$('.tv_vol_val').attr('current-vol',current_vol);
    		$('.tv_vol_val').text(current_vol);
    	}
    	else{
    		alert('You cannot set volume at above '+maximum_vol);
    	}
    	if(current_vol > 0){
    		$('.tv_mute_button').css('background-image', 'url("../images/tv_mute_off.png")');
    	}
    });
    $('.tv_vol_minus').on('click',function(){
    	var current_vol = parseInt($('.tv_vol_val').attr('current-vol'))-1;
    	var maximum_vol = parseInt($('.tv_vol_val').attr('tv-vol-max'));
    	var minimum_vol = parseInt($('.tv_vol_val').attr('tv-vol-min'));
    	if(current_vol >= minimum_vol && current_vol <= maximum_vol){
    		$('.tv_vol_val').attr('current-vol',current_vol);
    		$('.tv_vol_val').text(current_vol);
    	}
    	else{
    		alert('You cannot set volume at above '+minimum_vol);
    	}
    	if(current_vol == '0'){
    		$('.tv_mute_button').css('background-image', 'url("../images/tv_mute_on.png")');
    	}
    });
    $('.tv_ch_val').text($('.tv_ch_val').attr('current-ch'));
    $('.tv_ch_plus').on('click',function(){
    	var current_ch = parseInt($('.tv_ch_val').attr('current-ch'))+1;
		$('.tv_ch_val').attr('current-ch',current_ch);
		$('.tv_ch_val').text(current_ch);
    });
    $('.tv_ch_minus').on('click',function(){
    	var current_ch = parseInt($('.tv_ch_val').attr('current-ch'))-1;
		$('.tv_ch_val').attr('current-ch',current_ch);
		$('.tv_ch_val').text(current_ch);
    });
    $('.tv_mute_button').on('click',function(){
    	var current_vol = parseInt($('.tv_vol_val').attr('current-vol'));
    	if(current_vol > 0){
    		$('.tv_mute_button').css('background-image', 'url("../images/tv_mute_on.png")');
    		$('.tv_vol_val').attr('current-vol',0);
    		$('.tv_vol_val').attr('previous-vol',current_vol);
    		$('.tv_vol_val').text('0');
    	}
    	else{
    		$('.tv_mute_button').css('background-image', 'url("../images/tv_mute_off.png")');
    		$('.tv_vol_val').attr('current-vol',$('.tv_vol_val').attr('previous-vol'));
    		$('.tv_vol_val').text($('.tv_vol_val').attr('previous-vol'));
    		$('.tv_vol_val').attr('previous-vol',0);
    	}
    });

    $('.it_light_off_button').on('click',function(){
        var it_light_status = $('.it_room_light').attr('it-light-status');
        if(it_light_status == 'off'){
            $('.it_light_off_button').css('background-image', 'url("../images/aconoff.png")');
            $('.it_room_light').attr('it-light-status','on');
            $('.it_room_light').css('background-image', 'url("../images/new_light_on.png")');
        }
        else{
            $('.it_light_off_button').css('background-image', 'url("../images/acoffon.png")');
            $('.it_room_light').attr('it-light-status','off');
            $('.it_room_light').css('background-image', 'url("../images/new_light_off.png")');
        }
    });
});
