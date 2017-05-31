$(document).ready(function(){
	function position_popup () {
		// var pop_pos = $(window).scrollTop() + 100;
		// $('.popup_pos').css('top', pop_pos);
		var height=$('.popup_pos').height();
	    var width=$('.popup_pos').width();
	    $('.popup_pos').css({'margin-top': -height / 2 + "px", 'margin-left': -width / 2 + "px"});
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
		$('#backgroundPopup').show();
		$('.popup_pos').fadeIn();		
   		position_popup ();
   		$('.vxgplayer').attr('url',$(this).data('url'));
	});

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
});


