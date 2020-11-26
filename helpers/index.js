const http = require('http');

module.exports.postReq = (callback, data) => {
	const options = {
		host: 'sandbox-cashierapi.opayweb.com',
		path: '/api/v3/info/user',
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + process.env.PUBLIC_KEY,
			'content-type': 'application/json',
			'MerchantId': process.env.MERCHANT_ID,
		},
	};
	console.log(data);
	var httpReq = http.request(options, (response) => {
		var data = '';
		response.on('data', (chunk) => {
			data += chunk;
		});

		response.on('end', () => {
			callback(data);
			console.log(data);
		});
	});
	httpReq.on('error', (err) => {
		callback(err);
	});
	httpReq.write(data);
	httpReq.end();
}