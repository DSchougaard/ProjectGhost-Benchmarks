global.__base 		= __dirname + '/';

var benchrest 	= require('bench-rest');
var fs 			= require('fs');

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOjUsImlhdCI6MTQ2NTEzNTI3MiwiZXhwIjoxNDY2MzQ0ODcyLCJsdmwiOjF9.H7kkvkN46phWykeuPyREPqOzVJQYi2nobWlWpu3S2i3D5xbhb-gGFMP7xBqncPBKDc_wbnFxUAs3PA1DPCLi1rb8gLQJzmvgVEpwP_akKxljxQ2r1yOHAC-p9NkWfvTA3clvJ6R-Dv5a9J-oj8xaQQOc5IH-EpzfgNyGS_zwyduufvoPLTSLyz4tFr1BZ37Xdp_Rsr8Ze_BorwLUxCt9pT6Lw9wJlnr9LQT8FfLVgUspiOif6MAlpglU9X677v-1e78Bg558QsA_Yb2gFyUIoYdfOr_Zzl1lHbkd1AOStvIREHkv2UhSGKGZSOVa_sGs8HXUnl3jLA5mo7DdJeH2OJZ1zDl0cgeTr1V-Qfa_nT2OWZomqHCURCfbN4Z0TAYpJi-ABX0IjVP7HM2A-QAgtTX46LwQuzm6rDJWFIZAOjS2IijpG7c5r67NWq9A_oyGFahZWKYx0RtyYCsgqaf2AAX7gSY0SKHLToipp8TPL8DQzPrjzvXYDs0gvpLWtAY48e3ZeZply8FIwX-6jP-DiEZiLOD1aMPJanFaBqtTaIkDGq_AhVPwcJxFesnVwv8x2eFU42tiS1_8l86rLUsz1seUruuYNu069RrfeyI55CM6gPb29XY6lxZU_aVQy0vIjRbCTpp5N4_VRt-fYAhXDymeLPS6Cgf63ynP195hEr8";

var flow = {
	main: [
	//	{ get: 'https://localhost:8081/', strictSSL: false},
		//{ post: 'https://localhost:8081/api/auth/login', strictSSL: false, json:{username:'Daniel',password:'password'} , headers {'Authorization': 'Bearer '+token}},
		{ get: 'https://localhost:8081/api/users/5/passwords/43', strictSSL: false, json:{username:'Daniel',password:'password'} , headers: {'Authorization': 'Bearer '+token}},

	]
};

module.exports = flow;

var runOptions = {
	limit: 10,     // concurrent connections
	iterations: 10000 // number of iterations to perform
};
benchrest(flow, runOptions)
	.on('error', function (err, ctxName) { console.error('Failed in %s with err: ', ctxName, err); })
	.on('end', function (stats, errorCount) {
		console.log('error count: ', errorCount);
		console.log('stats', stats);
	});
