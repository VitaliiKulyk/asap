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

module.exports = {
	authenticate
}
