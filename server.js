var express = require("express");
var app     = express();
var path    = require("path");
var request = require("request");
var SamsungRemote = require('samsung-remote');

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/new.html')); //__dirname : It will resolve to your project folder.
});

app.use(express.static('assets')); //This folder contains the css and js files

// app.listen(3000);
// var io = require('socket.io').listen(app.listen(3000,'192.168.0.9'));
var io = require('socket.io').listen(app.listen(3000));

console.log("Running at Port 3000");

io.sockets.on('connection', function (socket) {
    // console.log("User Connected");
  //   socket.on('api_data', function (data) {
  //   	console.log(data);
  //       url='http://192.168.0.18/api/callAction';
  //   	if(data.purpose == "light_on_off" || data.purpose == "ac_on_off"){
  //   		// console.log("if");  		
  //   		qs = { deviceID: data.deviceid, name: data.act };
  //   	}
  //   	else if(data.purpose == "light_dimmer"){
  //   		// console.log("else if");
  //   		qs = { deviceID: data.deviceid, name: data.act, arg1:data.range};
  //   	}
  //       else if(data.purpose == "tv_control"){
  //           // console.log("tv_control");
  //           qs = { deviceID: data.deviceid, name: data.act, arg1:data.button_id};
  //       }
  //       else if(data.purpose == "ac_control"){
  //           // console.log("tv_control");
  //           qs = { deviceID: data.deviceid, name: data.act, arg1:data.data_val};
  //       }
  //       var options = { method: 'GET',
		// url: url,
		// qs: qs,
		// headers:
	 //    { 'postman-token': 'bf759df7-714a-781f-f424-f1fc799ecc41',
	 //     'cache-control': 'no-cache',
	 //     authorization: 'Basic c2F0aGVlc2hAd2ViZXppLmNvbS5hdTpXZWJlemkxMiE=' } };
  //       // console.log(options); 
		// request(options, function (error, response, body) {
		//   if (error) throw new Error(error);
  //         // console.log(response);
		//   // console.log(body);
		// });
  //   });


  //Functionality for Smart TV Samsung
  var remote = new SamsungRemote({
    // ip: '192.168.1.1'
    // ip: '192.168.0.23'
      ip: '192.168.0.15'
  });

  socket.on('key', function(key){
    console.log("key function called");
    remote.send(key, function callback(err){
      if (err) {
        console.log('Error ' + key + ' : ' + err);
        socket.emit('key', 'Error ' + key + ' : ' + err);
      } else {
        console.log('Key : ' + key);
        socket.emit('key', 'Key : ' + key);
      }
    });
  });
	
});
