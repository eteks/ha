$(document).ready(function(){	
	function position_popup () {
		alert("position");
		// var pop_pos = $(window).scrollTop() + 100;
		// $('.popup_pos').css('top', pop_pos);
		var height=$('.popup_pos').height();
	    var width=$('.popup_pos').width();
	    $('.popup_pos').css({'margin-top': -height / 2 + "px", 'margin-left': -width / 2 + "px"});
	}
	if (window.location.hash.substr(1) == "triggerReloadCode") {
	    window.location.hash = "";
	    $('.vxgplayer').attr('url',localStorage.getItem("cctv_url"));
	    // position_popup ();
   		$('#backgroundPopup').show();
   		$('.popup_pos,.popup_close').css({'visibility':'visible'});
	    
	}
	$('.material-switch').on('change',function(){
		var parent_cls = jQuery($(this).data('href'));
		var child_cls = jQuery('.' + $(this).data('options'));
		var parent = $(this).parents('.ctrl_appliances').find(parent_cls);

		if(parent.find(child_cls).hasClass('light1_off')) {
			parent.find(child_cls).removeClass('light1_off');
			parent.find(child_cls).addClass('light1_on');
		}
		else if($(this).data('options')=="light1") {
			parent.find(child_cls).removeClass('light1_on');
			parent.find(child_cls).addClass('light1_off');
		}

        if(parent.find(child_cls).hasClass('light2_off')) {
			parent.find(child_cls).removeClass('light2_off');
			parent.find(child_cls).addClass('light2_on');
		}
		else if($(this).data('options')=="light2") {
			parent.find(child_cls).removeClass('light2_on');
			parent.find(child_cls).addClass('light2_off');
		}

       	if(parent.find(child_cls).hasClass('light3_off')) {
			parent.find(child_cls).removeClass('light3_off');
			parent.find(child_cls).addClass('light3_on');
		}
		else if($(this).data('options')=="light3") {
			parent.find(child_cls).removeClass('light3_on');
			parent.find(child_cls).addClass('light3_off');
		}

        if(parent.find(child_cls).hasClass('ac_off')) {
			parent.find(child_cls).removeClass('ac_off');
			parent.find(child_cls).addClass('ac_on');
		}
		else if($(this).data('options')=="ac") {
			parent.find(child_cls).removeClass('ac_on');
			parent.find(child_cls).addClass('ac_off');
		}

        if(parent.find(child_cls).hasClass('cctv1_off')) {
			parent.find(child_cls).removeClass('cctv1_off');
			parent.find(child_cls).addClass('cctv1_on');
		}
		else if($(this).data('options')=="cctv1") {
			parent.find(child_cls).removeClass('cctv1_on');
			parent.find(child_cls).addClass('cctv1_off');
		}

        if(parent.find(child_cls).hasClass('cctv2_off')) {
			parent.find(child_cls).removeClass('cctv2_off');
			parent.find(child_cls).addClass('cctv2_on');
		}
		else if($(this).data('options')=="cctv2") {
			parent.find(child_cls).removeClass('cctv2_on');
			parent.find(child_cls).addClass('cctv2_off');
		}

        if(parent.find(child_cls).hasClass('tubelight_off')) {
			parent.find(child_cls).removeClass('tubelight_off');
			parent.find(child_cls).addClass('tubelight_on');
		}
		else if($(this).data('options')=="tubelight") {
			parent.find(child_cls).removeClass('tubelight_on');
			parent.find(child_cls).addClass('tubelight_off');
		}


//		if(parent.find(child_cls).hasClass('light_off')) {
//			parent.find(child_cls).removeClass('light_off');
//			parent.find(child_cls).addClass('light_on');
//		}
//		else if($(this).data('options')=="light") {
//			parent.find(child_cls).removeClass('light_on');
//			parent.find(child_cls).addClass('light_off');
//		}


		if(parent.find(child_cls).hasClass('fan_off')) {
			parent.find(child_cls).removeClass('fan_off');
			parent.find(child_cls).addClass('fan_on');
		}
	    else if($(this).data('options')=="fan") {
			parent.find(child_cls).removeClass('fan_on');
			parent.find(child_cls).addClass('fan_off');
		}
    });


	$('.cctv_act').click(function() {
		
		// $('.popup_pos').fadeIn();
		// $('.popup_close').show();
		
   		// position_popup ();
   		window.location.hash = "triggerReloadCode";
   		localStorage.setItem("cctv_url", $(this).data('url'));
		window.location.reload();

	});

	$('.popup_close,#backgroundPopup').click(function() {
		// $(this).parent().fadeOut();
		$('.popup_close').css({'visibility':'hidden'});
		$('.popup_pos').css({'visibility':'hidden'});
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
	});

    //positioning background
    var body_win_height = $(document).height();
    var win_height = $(window).height();

    if( body_win_height > win_height) {
		$('#backgroundPopup').height(body_win_height);
    } else {
		$('#backgroundPopup').height(win_height);
    }

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
    $('.ac_temp_val').text($('.ac_temp_val').attr('current-temp'));
    $('.ac_temp_plus').on('click',function(){
    	var current_temp = parseInt($('.ac_temp_val').attr('current-temp'))+1;
    	var maximum_temp = parseInt($('.ac_temp_val').attr('ac-max'));
    	var minimum_temp = parseInt($('.ac_temp_val').attr('ac-min'));
    	if(current_temp >= minimum_temp && current_temp <= maximum_temp){
    		$('.ac_temp_val').attr('current-temp',current_temp);
    		$('.ac_temp_val').text(current_temp);
    	}
    	else{
    		alert('You cannot set temparature at above '+maximum_temp);
    	}
    });
    $('.ac_temp_minus').on('click',function(){
    	var current_temp = parseInt($('.ac_temp_val').attr('current-temp'))-1;
    	var maximum_temp = parseInt($('.ac_temp_val').attr('ac-max'));
    	var minimum_temp = parseInt($('.ac_temp_val').attr('ac-min'));
    	if(current_temp >= minimum_temp && current_temp <= maximum_temp){
    		$('.ac_temp_val').attr('current-temp',current_temp);
    		$('.ac_temp_val').text(current_temp);
    	}
    	else{
    		alert('You cannot set temparature at below' +minimum_temp);
    	}
    });
    var ac_status = $('.ac_wrapper').attr('ac-status');
    if(ac_status == 'off'){
    	$('.ac_temp_wrapper').hide();
    	$('.ac_onoff_button').css('background-image', 'url("../images/acoffon.png")');
    }
    else{
    	$('.ac_temp_wrapper').show();
    	$('.ac_onoff_button').css('background-image', 'url("../images/aconoff.png ")');
    }
	$('.ac_onoff_button').on('click',function(){
		var ac_current_status = $('.ac_wrapper').attr('ac-status');
		if(ac_current_status == 'off'){
	    	$('.ac_temp_wrapper').show();
	    	$('.ac_wrapper').attr('ac-status','on');
	    	$('.ac_onoff_button').css('background-image', 'url("../images/aconoff.png")');
	    }
	    else{
	    	$('.ac_temp_wrapper').hide();
	    	$('.ac_wrapper').attr('ac-status','off');
	    	$('.ac_onoff_button').css('background-image', 'url("../images/acoffon.png ")');
	    }
	});
	// tv controll

	var tv_status = $('.tv_parent_wrapper').attr('tv-status');

	if(tv_status == 'off'){
    	$('.tv_onoff_button').css('background-image', 'url("../images/acoffon.png")');
    	$(".tv_number_menu_mute, .tv_vol, .tv_ch").hide();

    }
    else{
    	$('.tv_onoff_button').css('background-image', 'url("../images/aconoff.png ")');
    	$(".tv_number_menu_mute,.tv_vol,.tv_ch").show();
    }
    $('.tv_onoff_button').on('click',function(){
    	var tv_current_status = $('.tv_parent_wrapper').attr('tv-status');
    	if(tv_current_status == 'off'){
	    	$('.tv_onoff_button').css('background-image', 'url("../images/aconoff.png")');
	    	$(".tv_number_menu_mute, .tv_vol, .tv_ch").show();
	    	$('.tv_parent_wrapper').attr('tv-status','on');


	    }
	    else{
	    	$('.tv_onoff_button').css('background-image', 'url("../images/acoffon.png ")');
	    	$(".tv_number_menu_mute,.tv_vol,.tv_ch").hide();
	    	$('.tv_parent_wrapper').attr('tv-status','off');
	    }
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
	$('.light4 .dimmer_onoff_button').on('click',function(){
		var light4_status = $('.light4').attr('data-status');
		if(light4_status == 'off'){
	    	$('.light4').attr('data-status','on');
	    	$('.dimmer_onoff_button').css('background-image', 'url("../images/aconoff.png")');
	    }
	    else{
	    	$('.light4').attr('data-status','off');
	    	$('.dimmer_onoff_button').css('background-image', 'url("../images/acoffon.png ")');
	    }
	});

	$('.tubelight_onoff_button').on('click',function(){
		var tube_status = $('.tubelight_off').attr('data-status');
		if(tube_status == 'off'){
	    	$('.tubelight_off').attr('data-status','on');
	    	$('.tubelight_onoff_button').css('background-image', 'url("../images/aconoff.png")');
	    }
	    else{
	    	$('.tubelight_off').attr('data-status','off');
	    	$('.tubelight_onoff_button').css('background-image', 'url("../images/acoffon.png ")');
	    }
	});
});
