const auth = require('../auth');

function login(req, res){
	return auth.authenticate(req.body)
	.then(token => {
		res.send({
			success: true,
			data: { token }
		});
	})
	.catch(err => {
		if (err.type === 'custom'){
			return res.send({
				success: false,
				message: err.message
			});
		}
		return res.send({
			success: false,
			message: 'Authentication failed. Unexpected Error.'
		});
	})
};

module.exports = {
	login
}
