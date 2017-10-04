const auth = require('../auth');

module.exports = app => {
	app.post('/authenticate', (req, res) => {
		auth.authenticate(req.body)
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
	});
}
