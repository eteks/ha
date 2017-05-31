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
        // alert("option_act");
        // val = $(this).is(':checked');
        deviceid = $(this).data('deviceid');
        dimmer_range = $(this).val();
        // alert(deviceid);
        socket.emit('api_data', { deviceid: deviceid, act:'setValue',range:dimmer_range, purpose: 'light_dimmer' });
    //     if (val) {
    //         //socket.emit('publish', {topic:"ha",payload:"on+livroom_light"});
    // socket.emit('publish', {topic:"ha",payload:"on+livroom_light"});
    //     } else {
    //         //socket.emit('publish', {topic:"ha",payload:"off+livroom_light"});
    // socket.emit('publish', {topic:"ha",payload:"off+livroom_light"});
    //     }
    });
});
