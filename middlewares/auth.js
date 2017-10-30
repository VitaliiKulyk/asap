const config =  require('../config');
const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
	var token = req.headers['token'];
	if (!token)
		return res.status(403).send({ auth: false, message: 'No token provided.' });

	jwt.verify(token, config.jwtSecret, (err, decoded) => {
		if (err)
			return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    req.user = {
			login: decoded.login
		};
    next();
	});
}

module.exports = {
	checkAuth
}
