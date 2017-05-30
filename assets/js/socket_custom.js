$(function () {
    var socket = io();
    $('.option_act').click(function(){
        // alert("option_act");
        // val = $(this).is(':checked');
        deviceid = $(this).data('deviceid');
        // alert(deviceid);
        socket.emit('api_data', { deviceid: deviceid, act:'turnOn' });
    //     if (val) {
    //         //socket.emit('publish', {topic:"ha",payload:"on+livroom_light"});
    // socket.emit('publish', {topic:"ha",payload:"on+livroom_light"});
    //     } else {
    //         //socket.emit('publish', {topic:"ha",payload:"off+livroom_light"});
    // socket.emit('publish', {topic:"ha",payload:"off+livroom_light"});
    //     }
    });
});
