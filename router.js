const authController = require('./controllers/auth');
const orderController = require('./controllers/order');
const userController = require('./controllers/user');

const authMiddleware = require('./middlewares/auth');

module.exports.set = (app) => {
	app.post('/login', authController.login);
	app.post('/register', authController.register);
	//next endpoints require auth
	app.get('/orders', authMiddleware.checkAuth, orderController.getOrders);
	app.get('/user_orders', authMiddleware.checkAuth, userController.getUsersWithOrders)
}
