$(function () {
    var socket = io();
    $('.light_on_off_act').click(function(){
        // alert("option_act");
        // val = $(this).is(':checked');
        deviceid = $(this).data('deviceid');
        // alert(deviceid);
        socket.emit('api_data', { deviceid: deviceid, act:'turnOn',purpose: 'light_on_off' });
    });
    $('.light_dimmer_act').click(function(){
        deviceid = $(this).data('deviceid');
        dimmer_range = $(this).val();
        socket.emit('api_data', { deviceid: deviceid, act:'setValue',range:dimmer_range, purpose: 'light_dimmer' });
    });
    $('.tv_onoff_act').click(function(){
        //old_design
        // tv_status = $(this).parents('li').attr('tv-status');
        //new_Design
        tv_status = $(this).parents('.board_room_tv').attr('tv-status');
        if(tv_status == 'on')
            buttonid = 'Button11';
        else
            buttonid = 'Button12';
        //old_design
        // deviceid = $(this).parents('li').data('deviceid');
        //new_Design
        deviceid = $(this).parents('.board_room_tv').data('deviceid');
        socket.emit('api_data', { deviceid: deviceid, act:'pressButton',button_id:buttonid, purpose:'tv_control'});
    });
    $('.tv_control_act').click(function(){
        buttonid = $(this).data('buttonid');
        deviceid = $(this).parents('.board_room_tv').data('deviceid');
        socket.emit('api_data', { deviceid: deviceid, act:'pressButton',button_id:buttonid, purpose:'tv_control'});
    });
    
    
});
