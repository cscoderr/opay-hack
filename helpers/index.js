const http = require('http');

module.exports.postReq = (callback, data) => {
	const options = {
		host: 'sandbox-cashierapi.opayweb.com',
		path: '/api/v3/info/user',
		method: 'POST',
		headers: {
			'Authorization': 'Bearer OPAYPUB16058867969410.845683751701366',
			'content-type': 'application/json',
			'MerchantId': '256620112018036',
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
