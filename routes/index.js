const router = require('express').Router();
const HomeController = require('../controllers/HomeController');
const {postReq} = require('../helpers/index');

router.post('/', (req, res) => {
	var sessionId = req.body.sessionId;
	var serviceCode = req.body.seviceCode;
	var phoneNumber = req.body.phoneNumber;
	var text = req.body.text;
	var response;
	var inputs;
	var exists = false;

	if(phoneNumber != undefined || phoneNumber != '') {
		var data = JSON.stringify({
			phoneNumber: phoneNumber
		});
		postReq((response) => {
			var resData = JSON.parse(response);
			console.log(resData);
			if(resData['code'] == 'user_not_found') {
				response = 'END Your number is not registered with opay, pls register and try again';
			} else {
				if(text == '' || text == undefined) {
					response = 'CON 1. Check Balance \n';
					response += '2. Transfer to Opay Wallet \n';
					response += '3. Tranfer to Bank \n';
				} else if(text == '1' || text == '2') {
					response = "CON Enter your amount to transfer \n";
				} else {
					if(text.indexOf("*") > 0) {
						inputs = text.split('*');
						console.log(inputs);
						if(inputs.length == 2 && inputs[1] != undefined && inputs[1] != '') {
							var accountNumber = inputs[1];
							if(accountNumber.length == 10) {
								response = 'CON UBA \n Access \n Diamond';
							} else {
								response = 'END Please enter a valid account number';
							}
						}  else if(inputs.length == 3 && inputs[2] != undefined && inputs[2] != '') {

						}
					}
				}
			}
			res.setHeader('Content-type', 'text/plain');
			res.send(response);
		}
	}
}

module.exports = router;