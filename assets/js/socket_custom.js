$(function () {
    var socket = io();
    $('.light_on_off_act').click(function(){
        // alert("option_act");
        // val = $(this).is(':checked');
        deviceid = $(this).data('deviceid');
        light_status = $(this).parents('.board_roome_all_lights').attr('light-status');
        // alert(light_status);
        // alert(deviceid);
        if(light_status == 'on')
            status = 'turnOn';
        else
            status = 'turnOff';
        socket.emit('api_data', { deviceid: deviceid, act:status,purpose: 'light_on_off' });
    });
    $('.light_dimmer_act').click(function(){
        deviceid = $(this).data('deviceid');
        dimmer_range = $(this).val();
        // alert(deviceid);
        // alert(dimmer_range);
        socket.emit('api_data', { deviceid: deviceid, act:'setValue',range:dimmer_range, purpose: 'light_dimmer' });
    });
    $('.tv_onoff_act').click(function(){
        //old Fibaro API code
        // //old_design
        // // tv_status = $(this).parents('li').attr('tv-status');
        // //new_Design
        // tv_status = $(this).parents('.board_room_tv').attr('tv-status');
        // if(tv_status == 'on')
        //     buttonid = 'Button11';
        // else
        //     buttonid = 'Button12';
        // //old_design
        // // deviceid = $(this).parents('li').data('deviceid');
        // //new_Design
        // deviceid = $(this).parents('.board_room_tv').data('deviceid');
        // socket.emit('api_data', { deviceid: deviceid, act:'pressButton',button_id:buttonid, purpose:'tv_control'});

        tv_status = $(this).parents('li').attr('tv-status');
        if(tv_status == 'on')
            press_key = 'KEY_POWERON';
        else
            press_key = 'KEY_POWEROFF';
        socket.emit('key', press_key);
        
    });
    $('.tv_control_act').click(function(){
        //old Fibaro API code
        // buttonid = $(this).data('buttonid');
        // deviceid = $(this).parents('.board_room_tv').data('deviceid');
        // socket.emit('api_data', { deviceid: deviceid, act:'pressButton',button_id:buttonid, purpose:'tv_control'});
        
        press_key = $(this).data('key');
        alert(press_key);
        socket.emit('key', press_key);
    });
    $('.it_room_light_act').click(function(){
        deviceid = $(this).parents('.it_room_light').data('deviceid');
        light_status = $(this).parents('.it_room_light').attr('it-light-status');
        if(light_status == 'on')
            status = 'turnOn';
        else
            status = 'turnOff';
        socket.emit('api_data', { deviceid: deviceid, act:status,purpose: 'light_on_off' });
    });
    $('.floor_outer_light_act').click(function(){
        deviceid = $(this).parents('.floor_outer_tubelight').data('deviceid');
        light_status = $(this).parents('.floor_outer_tubelight').attr('outer-tube-light-status');
        if(light_status == 'on')
            status = 'turnOn';
        else
            status = 'turnOff';
        socket.emit('api_data', { deviceid: deviceid, act:status,purpose: 'light_on_off' });
    });
    // $('.ac_on_off_act').click(function(){
    //     //old_design
    //     // tv_status = $(this).parents('li').attr('tv-status');
    //     //new_Design
    //     ac_status = $(this).parents('.it_room_ac').attr('it-room-ac-status');
    //     // alert(ac_status);
    //     if(ac_status == 'on')
    //         status = 'turnOn';
    //     else
    //         status = 'turnOff';
    //     //old_design
    //     // deviceid = $(this).parents('li').data('deviceid');
    //     //new_Design
    //     deviceid = $(this).parents('.it_room_ac').data('deviceid');
    //     alert(status);
    //     alert(deviceid);
    //     socket.emit('api_data', { deviceid: deviceid, act:status, purpose: 'ac_on_off' });
    // });
    $('.ac_temp_act').click(function(){
        temp_val = $(this).parents('.it_room_ac').find('.ac_temp_val').text();
        deviceid = $(this).parents('.it_room_ac').data('deviceid');
        socket.emit('api_data', { deviceid: deviceid, act:'setTargetLevel',temp_val:temp_val, purpose:'ac_control'});
    });
    
});
