const authController = require('./controllers/auth');
const mainController = require('./controllers/main');

module.exports.set = (app) => {
	app.post('/login', authController.login)
}
