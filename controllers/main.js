const sequelize = require('../db');
const Users = require('../repositories').Users;
const auth = require('../auth');

module.exports = app => {
	app.get('/data', auth.verifyAuth, (req, res) => {
		Users.getAll()
		.then(data => res.send(data));
	});
}
