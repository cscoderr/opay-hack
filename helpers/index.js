const http = require('http');

exports.postReq = (callback, data) => {
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
	http.request(option, (response) => {
		const callback = (res) => {
			var data = '';
			res.on('data', (chunk) => {
				data += chunk;
			});

			res.on('end', () => {
				console.log(data);
				var res = JSON.parse(data);
				if(res['code'] == 'user_not_found') {
					console.log(res);
					exists = false;
				} else {
					exists = true;
				}
			});
		};
	};
}