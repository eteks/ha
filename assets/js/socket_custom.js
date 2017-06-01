$(function () {
    var socket = io();
    $('.light_on_off_act').click(function(){
        // alert("option_act");
        // val = $(this).is(':checked');
        deviceid = $(this).data('deviceid');
        // alert(deviceid);
        socket.emit('api_data', { deviceid: deviceid, act:'turnOn',purpose: 'light_on_off' });
    //     if (val) {
    //         //socket.emit('publish', {topic:"ha",payload:"on+livroom_light"});
    // socket.emit('publish', {topic:"ha",payload:"on+livroom_light"});
    //     } else {
    //         //socket.emit('publish', {topic:"ha",payload:"off+livroom_light"});
    // socket.emit('publish', {topic:"ha",payload:"off+livroom_light"});
    //     }
    });
    $('.light_dimmer_act').click(function(){
        deviceid = $(this).data('deviceid');
        dimmer_range = $(this).val();
        socket.emit('api_data', { deviceid: deviceid, act:'setValue',range:dimmer_range, purpose: 'light_dimmer' });
    });
    $('.tv_onoff_act').click(function(){
        tv_status = $(this).parents('li').attr('tv-status');
        // alert(tv_status);
        if(tv_status == 'on')
            button_id = 'Button11';
        else
            button_id = 'Button12';
        deviceid = $(this).parents('li').data('deviceid');
        alert(deviceid);
        socket.emit('api_data', { deviceid: deviceid, act:'pressButton',button_id:button_id, purpose:'tv_on_off'});
    });
    
});
