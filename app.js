global.__base 		= __dirname + '/';

var benchrest 	= require('bench-rest');
var fs 			= require('fs');
var request = require('sync-request');

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOjEsImlhdCI6MTQ2NTIwMjQ2OCwiZXhwIjoxNDY2NDEyMDY4LCJsdmwiOjF9.YfUd52JBdEWwUjdclbfaGQwjG9K_qExDVf_fug6Y4slq8HnWWb1s3AwbJYnFcVULT-aN3vkl-0beHc7aeHUzNbaBWTZ3gW2eLsX_NntgZmVO6jiy8Z1c776ZQO5VaAEly6zQCK4qhaA5H3qheUDTD1y0aNQPC_PUHP_QTCAHDY-L-9PErZIP94T09YNfsswml8Y_qJwCVV5lhwPHfkoIFD_w0GK4j9gI4B7JW5ZGslaed23yMT1ZIUK76HVrij8MvyLeMpF5-m7cYc0EOgGXWETkZGsTTo-rWaWAWay1_rUAYoEos70l1DZle63k6GfLhKWycKFLmd4VaKO6JeSJ19HoR-Q25igy8e-RUSIPo_YbiMkEKFP0Dbmu0DPGaRfWaHZra_75nxeGF1z1-wZgVlvtq3YJI8hSoJx3tlv9XdZ1UT4vnV-rdtaXTRFFf6in7oX8GwN67UDtUxG2WPHYZM_D9YG6KqdbJ_3eCLOp9Y1caYcIanyC5JP7qhPas0LMytii2UwmaJeeK9q1e6sUEtRxq75_S2BnUFVGN8P4Q6hrvT8SMA50Q134jPZ3rUQOIQanExbPlgRl89sSWrh_KJ63u5qnsmEWfiA-Akmc1KssZ43ahEu-aNPkFp0KgG-EFOwEf7r1DFJ_2P4IqLsMGfXAJ0n-NaIBPFRdPPLq1UA";

//var flow = {
//	main: [
//	//	{ get: 'https://localhost:8081/', strictSSL: false},
//		//{ post: 'https://192.168.1.18:8081/api/auth/login', strictSSL: false, json:{username:'admin',password:'admin'} },
//		//{ get: 'https://192.168.1.18:8081/api/auth/ping', strictSSL: false },
//		{ get: 'https://192.168.1.18:8081/api/users/1/passwords/1', strictSSL: false, headers: {'Authorization': 'Bearer '+token}},
//
//	]
//};
//
//module.exports = flow;
//
//var runOptions = {
//	limit: 10,     // concurrent connections
//	iterations: 10000 // number of iterations to perform
//};
//benchrest(flow, runOptions)
//	.on('error', function (err, ctxName) { console.error('Failed in %s with err: ', ctxName, err); })
//	.on('end', function (stats, errorCount) {
//		console.log('error count: ', errorCount);
//		console.log('stats', stats);
//	});
//

for( var i = 0 ; i < 1000 ; i++ ){
	var res = request('GET', 'https://192.168.1.18:8081/api/users/1/passwords/1', {strictSSL: false});
	console.log(res.getBody());
}
