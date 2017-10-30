const sequelize = require('./db');
const Users = require('./models').User;
const config =  require('./config');
const CustomError = require('./CustomError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticate = params => {
	return Users.findOne({
		where: {
			login: params.login
		},
		raw: true
	}).then(user => {
		if (!user)
			throw new CustomError('Authentication failed. User not found.');

		if (!bcrypt.compareSync(params.password || '', user.password))
			throw new CustomError('Authentication failed. Wrong password.');

		const payload = {
			login: user.login,
			time: new Date()
		};

		var token = jwt.sign(payload, config.jwtSecret, {
			expiresIn: '6h'
		});

		return token;
	});
}

const verifyAuth = (req, res, next) => {
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
	authenticate,
	verifyAuth
}
