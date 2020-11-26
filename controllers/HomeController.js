const https = require('https');
const http = require('http');
exports.curl = (options, callbacks) => {
	var req = https.request(options, callbacks).on('error', (err) => {
		console.log(err);
	});
	req.end();
};

exports.curlPost = (options, callbacks, body) => {
	var req = http.request(options, callbacks).on('error', (err) => {
		console.log(err);
	});
	req.write(body);
	req.end();
};